export const getPreset = (name) => {
  let preset = {};

  switch(name) {
    case 'b1': // Brussels, 21st June, 2022
      preset = {
        date: '2022-06-21',
        latitude: '50.8476',
        longitude: '4.3572',
        utcOffset: '2',
      };
      break;
      case 'b2': // Brussels, 21st December, 2022
      preset = {
        date: '2022-12-21',
        latitude: '50.8476',
        longitude: '4.3572',
        utcOffset: '1',
      };
      break;
      case 'sp1': // São Paulo, 21st June, 2022
      preset = {
        date: '2022-06-21',
        latitude: '-23.5558',
        longitude: '-46.6396',
        utcOffset: '-3',
      };
      break;
      case 'sp2': // São Paulo, 21st December, 2022
      preset = {
        date: '2022-12-21',
        latitude: '-23.5558',
        longitude: '-46.6396',
        utcOffset: '-3',
      };
      break;
    default:
      break;
  }

  return preset;
}

export const getValid = () => {
  return {
    dateValid: true,
    latitudeValid: true,
    longitudeValid: true,
    utcOffsetValid: true,
    formValid: true,
    formErrors: {
      date: '',
      latitude: '',
      longitude: '',
      utcOffset: '',
    },
  };
}
