// Radians to degrees
const radians = (radians) => {
  return radians * (180 / Math.PI);
}

// Degrees to radians
const degrees = (degrees) => {
  return degrees * (Math.PI / 180);
}

// Date (string 'YYY-MM-DD') to array of integers [year, month, day]
const dateToArray = (date) => {
  return date.split('-').map(el => parseInt(el));
}

// Is year (integer) a leap year?
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Date (string 'YYY-MM-DD') to day of year (integer)
// https://www.epochconverter.com/daynumbers
const yearDay = (date) => {
  let day = new Date(date);
  return Math.ceil((day - new Date(day.getFullYear(),0,1)) / 86400000) + 1;
}

// Hours and minutes (integers) to fraction of the day (float)
const timeToFraction = (h, m) => {
  return (h * 3600 + m * 60) / 86400.0;
}

// Returns time as string in 24-hour format
const integersToTimeStr = (h, m) => {
  let hrs = '';
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

// ================================= Calculate the Sun's position =================================
// Algorithm based on information in: https://gml.noaa.gov/grad/solcalc/solareqns.PDF
const sunPos = (date, h, m, latitude, longitude, utcOffset) => {
  if (longitude < 0.0) longitude = 360 + longitude;

  const dateArr = dateToArray(date);
  const diy = isLeapYear(dateArr[0]) ? 366 : 365 // days in year

  // fy = fractional year, in radians (360 degrees ~= 6.28319 radians)
  const fy = ((2 * Math.PI) / diy) * (yearDay(date) - 1 + timeToFraction(h, m));

  // eqtime = equation of time (in minutes)
  const eqtime = 229.18 * (0.000075 + (0.001868 * Math.cos(fy)) - (0.032077 * Math.sin(fy)) - (0.014615 * Math.cos(2 * fy)) - (0.040849 * Math.sin(2 * fy)))

  // decl = solar declination (in radians)
  const decl = 0.006918 - (0.399912 * Math.cos(fy)) + (0.070257 * Math.sin(fy)) - (0.006758 * Math.cos(2 * fy)) + (0.000907 * Math.sin(2 * fy)) - (0.002697 * Math.cos(3 * fy)) + (0.00148 * Math.sin(3 * fy))

  // t_offset = time offset (in minutes), where longitude is in degrees (positive to the east of the Prime Meridian), utcOffset is in hours from UTC
  const t_offset = eqtime + (4 * longitude) - (60 * utcOffset)

  // tst = true solar time (in minutes), where h is the hour (0 - 23), m is the minute (0 - 59)
  const tst = (h * 60) + m + t_offset

  // sha = solar hour angle, (in radians)
  const sha = degrees((tst / 4.0) - 180)

  // sza = solar zenith angle (in radians) can then be found from the hour angle (sha), latitude (lat) and solar declination (decl)
  const sza = Math.acos((Math.sin(degrees(latitude)) * Math.sin(decl)) + (Math.cos(degrees(latitude)) * Math.cos(decl) * Math.cos(sha)))

  // saa = the solar azimuth angle (in radians, clockwise from north)
  //
  //                        (sin(latitude) * cos(sza)) - sin(decl)
  // saa = cos(180 - saa) = --------------------------------------
  //                             cos(latitude) * sin(sza)
  const saa = (Math.acos(((Math.sin(degrees(latitude)) * Math.cos(sza)) - Math.sin(decl)) / (Math.cos(degrees(latitude)) * Math.sin(sza))) - degrees(180.0)) * -1
  
  // refractionFactor = close to 1.0 for the horizon, and reduces to 0.0 as deviate further from horizon.
  // Close to 1.0 for the horizontal, close to 0.0 for the zenith & nadir.
  // This applies refraction even when the sun is well below the horizon, but it's better than nothing.
  const refractionFactor = Math.pow((90.0 - Math.abs(90 - radians(sza))) / 90.0, 2); 
  return {
    sza: 90.0 + (0.833 * refractionFactor) - radians(sza), // 0.833 = rough approximation of refraction near horizon
    saa: radians(saa),
    time: integersToTimeStr(h, m),
  };
}

export const sunPath = (date, latitude, longitude, utcOffset) => {
  const smallestAbs = (a, b) => {
    return Math.abs(a.sza) <= Math.abs(b.sza) ? a : b;
  }

  console.log('sunPath');

  let pathData = [];
  let sunrise = 'not set';
  let sunset = 'not set';
  let zenith = 'not set';
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

      if (lastDatum === null || datum.sza > lastDatum.sza) {
        zenith = datum;
      }

      lastDatum = datum;
    }
  }

  if (sunrise === 'not set') {
    let neverReason = '';

    if (zenith.sza > 0.0) {
      neverReason = 'never - constant daylight';
    } else {
      neverReason = 'never - constant darkness';
      zenith = {
        sza: null,
        saa: null,
        time: neverReason,
      };
    }

    sunrise = {
      sza: null,
      saa: null,
      time: neverReason,
    };

    sunset = {
      sza: null,
      saa: null,
      time: neverReason,
    };
  }

  return {
    pathData: pathData,
    sunrise: sunrise,
    sunset: sunset,
    zenith: zenith,
  };
}
