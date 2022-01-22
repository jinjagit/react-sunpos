// Radians to degrees
const radians = (radians) => radians * (180 / Math.PI);

// Degrees to radians
const degrees = (degrees) => degrees * (Math.PI / 180);

// Date (string 'YYY-MM-DD') to array of integers [year, month, day]
const dateToArray = (date) => date.split('-').map(el => parseInt(el));

// Is year (integer) a leap year?
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Date (string 'YYY-MM-DD') to day of year (integer)
// https://www.epochconverter.com/daynumbers
const yearDay = (date) => {
  const day = new Date(date);
  return Math.ceil((day - new Date(day.getFullYear(),0,1)) / 86400000) + 1;
}

// Hours and minutes (integers) to fraction of the day (float)
const timeToFraction = (h, m) =>  (h * 3600 + m * 60) / 86400.0;

// Returns time as string in 24-hour format
const integersToTimeStr = (h, m) => {
  let hrs  = '';
  let mins = '';
  
  if (h > 9) {
    hrs = h.toString();
  } else {
    hrs = `0${h}`;
  }

  if (m > 9) {
    mins = m.toString();
  } else {
    mins = `0${m}`;
  }

  return `${hrs}:${mins}`;
}

const timeStrToIntegers = (timeStr) => {
  const parts = timeStr.split(':');
  return [parseInt(parts[0]), parseInt(parts[1])];
}

const timeStrToDurationStr = (timeStr) => {
  const [h, m] = timeStrToIntegers(timeStr);
  return `${h}h ${m}m`;
}

// Returns duration between two time strings in 24-hour format, as string 'HH:MM'
const timeBetween = (a, b) => {
  const partsA = a.split(':');
  const partsB = b.split(':');

  const minsA = (parseInt(partsA[0]) * 60) + parseInt(partsA[1]);
  const minsB = (parseInt(partsB[0]) * 60) + parseInt(partsB[1]);

  const hours = Math.floor(Math.abs((minsA - minsB) / 60.0));
  const mins  = Math.abs((minsA - minsB) % 60);

  let h = hours.toString();
  if (hours < 10) h = '0' + h;

  let m = mins.toString();
  if (mins < 10) m = '0' + m;

  return `${h}:${m}`;
}

// ================================= Calculate the Sun's position =================================
// Algorithm based on information in: https://gml.noaa.gov/grad/solcalc/solareqns.PDF
const sunPos = (date, h, m, latitude, longitude, utcOffset) => {
  if (longitude < 0.0) longitude = 360.0 + longitude;

  const dateArr = dateToArray(date);
  const diy = isLeapYear(dateArr[0]) ? 366 : 365 // days in year

  // fy = fractional year, in radians (360 degrees ~= 6.28319 radians)
  const fy = ((2 * Math.PI) / diy) * (yearDay(date) - 1 + timeToFraction(h, m));

  // eqtime = equation of time (in minutes)
  const eqtime = 229.18 * (0.000075 + (0.001868 * Math.cos(fy)) - (0.032077 * Math.sin(fy))
                 - (0.014615 * Math.cos(2 * fy)) - (0.040849 * Math.sin(2 * fy)))

  // decl = solar declination (in radians)
  const decl = 0.006918 - (0.399912 * Math.cos(fy)) + (0.070257 * Math.sin(fy))
               - (0.006758 * Math.cos(2 * fy)) + (0.000907 * Math.sin(2 * fy))
               - (0.002697 * Math.cos(3 * fy)) + (0.00148 * Math.sin(3 * fy))

  // t_offset = time offset (in minutes), where longitude is in degrees
  // (positive to the east of the Prime Meridian), utcOffset is in hours from UTC
  const t_offset = eqtime + (4 * longitude) - (60 * utcOffset)

  // tst = true solar time (in minutes), where h is the hour (0 - 23), m is the minute (0 - 59)
  const tst = (h * 60) + m + t_offset

  // sha = solar hour angle, (in radians)
  const sha = degrees((tst / 4.0) - 180)

  // sza = solar zenith angle (in radians) can then be found from the hour angle (sha), latitude (lat) and solar declination (decl)
  const sza = Math.acos((Math.sin(degrees(latitude)) * Math.sin(decl)) + (Math.cos(degrees(latitude)) * Math.cos(decl) * Math.cos(sha)))
  
  // refractionFactor = close to 1.0 for the horizon, and reduces to 0.0 as deviate further from horizon.
  // This applies refraction even when the sun is well below the horizon, but it's better than nothing.
  const refractionFactor = Math.pow((90.0 - Math.abs(90 - radians(sza))) / 90.0, 2);

  return {
    sza: 90.0 + (0.833 * refractionFactor) - radians(sza), // 0.833 = rough approximation of refraction near horizon
    time: integersToTimeStr(h, m),
  };
}
// =========================================================================================

export const sunCalc = (date, latitude, longitude, utcOffset) => {
  const smallestAbs = (a, b) => Math.abs(a.sza) <= Math.abs(b.sza) ? a : b;

  let pathData  = [];
  let sunrise   = 'not set';
  let sunset    = 'not set';
  let zenith    = 'not set';
  let daylight  = 'not set';
  let darkness  = 'not set';
  let dayPc     = 'not set';
  let darkPc    = 'not set';
  let lastDatum = null;

  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m++) {
      let datum = sunPos(date, h, m, latitude, longitude, utcOffset);
      pathData.push(datum);

      if (lastDatum !== null) {
        if (sunrise === 'not set' && datum.sza >= 0.0 && lastDatum.sza <= 0.0) {
          sunrise = smallestAbs(datum, lastDatum);
        } else if (datum.sza <= 0.0 && lastDatum.sza >= 0.0) {
          sunset = smallestAbs(datum, lastDatum);
        }
      }

      if ((lastDatum === null || datum.sza > lastDatum.sza) && (zenith === 'not set' || datum.sza > zenith.sza)) {
        zenith = datum;
      }

      lastDatum = datum;
    }
  }

  if (sunrise === 'not set') {
    let neverReason = '';

    if (zenith.sza > 0.0) {
      neverReason = 'constant daylight';
      daylight    = '24h 0m';    
      darkness    = '0h 0m';
      dayPc       = 100.0;
      darkPc      = 0.0; 
    } else {
      neverReason = 'constant darkness';
      zenith = {
        sza: null,
        time: neverReason,
      };
      daylight = '0h 0m';    
      darkness = '24h 0m';
      dayPc    = 0.0;
      darkPc   = 100.0;
    }

    sunrise = {
      sza: null,
      time: neverReason,
    };

    sunset = {
      sza: null,
      time: neverReason,
    };
  } else {
    daylight = timeBetween(sunrise.time, sunset.time);    
    darkness = timeBetween(daylight, '24:00');
    const daylightInts = timeStrToIntegers(daylight);
    const darknessInts = timeStrToIntegers(darkness);
    dayPc  = Math.round(timeToFraction(daylightInts[0], daylightInts[1]) * 100.0);
    darkPc = Math.round(timeToFraction(darknessInts[0], darknessInts[1]) * 100.0);
    daylight = timeStrToDurationStr(daylight);
    darkness = timeStrToDurationStr(darkness);
  }
  
  return {
    pathData: pathData,
    sunrise:  sunrise,
    sunset:   sunset,
    zenith:   zenith,
    daylight: daylight,
    darkness: darkness,
    dayPc:    dayPc,
    darkPc:   darkPc,
  };
}
