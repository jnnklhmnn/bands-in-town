/**
* transforms given date string to array including
* month and day 
* i.e. ['jan', '01']
* manages spinner state, await api Service
* @param datetime string i.e. 2018-09-16T14:00:00
* @returns array including month and day
*/
export function dateTimeToDate(dateTime) {
  if (!dateTime) {
    return false;
  }

  let result = [];
  const day = dateTime.slice(8, 10);
  let month;
  switch (dateTime.slice(5, 7)) {
    case '01':
      month = 'jan';
      break;
    case '02':
      month = 'feb';
      break;
    case '03':
      month = 'mär';
      break;
    case '04':
      month = 'apr';
      break;
    case '05':
      month = 'mai';
      break;
    case '06':
      month = 'jun';
      break;
    case '07':
      month = 'jul';
      break;
    case '08':
      month = 'aug';
      break;
    case '09':
      month = 'sep';
      break;
    case '10':
      month = 'okt';
      break;
    case '11':
      month = 'nov';
      break;
    case '12':
      month = 'dez';
      break;
    default:
      month = '';
      break;
  }
  result.push(month, day);

  return result;
}