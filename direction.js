// let dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']

// 22.5

// let angle = -11.1;

// console.log(
//   Math.round(((angle % 360) + 11.25) / 22.5)
// );


// let a = Math.cos(1.7);

// console.log(Math.acos(a));

// console.log((-3 + 360) % 360);

const timeToFraction = (h, m) => {
  return (h * 3600 + m * 60) / 86400.0;
}

// Is this time string (e.g. '12:00') before that time string (e.g. '12:10')? => true
const thisIsBeforeThat = (a, b) => {
  const partsA = a.split(':');
  const partsB = b.split(':');

  return timeToFraction(partsA[0], partsA[1]) < timeToFraction(partsB[0], partsB[1]) ? true : false;
}

console.log(thisIsBeforeThat('01:10', '12:10'));