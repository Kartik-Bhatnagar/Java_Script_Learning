function checkLeapYear(year1) {
  //if the year is evenly divisible by 4 but not by 100 with the exception
  //of getting fully divisible by 400  then the year is a LeapYear
  if (year1 % 4 == 0) {
    if (year1 % 100 == 0 && year1 % 400 != 0) {
      return false;
    } else {
      return true;
    }
  } else {
    //year is not a leap year
    return false;
  }
}
function daysPassedMonth(month) {
  // to know how many days passed upto the month
  let monthDays = 0;
  //it is written this way to explore the switch case and ytake advatange of not using break statement
  switch (month) {
    case 12:
      monthDays += 31;
    case 11:
      monthDays += 30;
    case 10:
      monthDays += 31;
    case 9:
      monthDays += 30;
    case 8:
      monthDays += 31;
    case 7:
      monthDays += 31;
    case 6:
      monthDays += 30;
    case 5:
      monthDays += 31;
    case 4:
      monthDays += 30;
    case 3:
      monthDays += 31;
    case 2:
      monthDays += 28;
    case 1:
      monthDays += 31;
      break;
    default:
      monthDays = 0;
  }
  return monthDays;
}

function dayNumber(date, month, year) {
  let yearIsLeap = false;
  if (month > 2) {
    //if the month is post Feburary then we need to know if it a leap year
    // (to check number of days in feb. )
    yearIsLeap = checkLeapYear(year);
  }
  let noOfDays = date + daysPassedMonth(month - 1) + (yearIsLeap ? 1 : 0);
  return noOfDays;
}

function revTotDays(date, month, year) {
  let totDays = dayNumber(date, month, year);
  let yearDays = 365;
  let leapYear = false;
  if (month > 2 && checkLeapYear(year)) {
    leapYear = true;
    yearDays += 1;
  }
  return yearDays - totDays;
}

function totDays(fDate, fMonth, fYear, tDate, tMonth, tYear) {
  if (fYear > tYear) {
    return -1; //`Date of birth is greater than todays date`;
  }

  if (fYear == tYear) {
    let daysDiff =
      revTotDays(fDate, fMonth, fYear) - revTotDays(tDate, tMonth, tYear);
    if (daysDiff >= 0) {
      return daysDiff;
    } else {
      return -1;
    }
  } else {
    let yearDifference = tYear - fYear - 1;
    leapYearCount = 0;
    for (let y = fYear + 1; y < tYear; y++) {
      if (checkLeapYear(y)) {
        leapYearCount += 1;
      }
    }
    let totDaysPassed =
      revTotDays(fDate, fMonth, fYear) +
      365 * yearDifference +
      leapYearCount +
      dayNumber(tDate, tMonth, tYear);
    return totDaysPassed;
  }
}

//console.log(totDays(28, 7, 1999, 18, 7, 2023));
