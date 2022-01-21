// Returns duration between two time strings in 24-hour format, as string 'HH:MM'
const timeBetween = (a, b) => {
  const partsA = a.split(':');
  const partsB = b.split(':');

  const minsA = (parseInt(partsA[0]) * 60) + parseInt(partsA[1]);
  const minsB = (parseInt(partsB[0]) * 60) + parseInt(partsB[1]);

  const hours = Math.floor(Math.abs((minsA - minsB) / 60.0));
  const mins = Math.abs((minsA - minsB) % 60);

  let h = hours.toString();
  if (hours < 10) h = '0' + h;

  let m = mins.toString();
  if (mins < 10) m = '0' + m;

  return `${h}:${m}`;
}

console.log(timeBetween('01:00', '01:07'));