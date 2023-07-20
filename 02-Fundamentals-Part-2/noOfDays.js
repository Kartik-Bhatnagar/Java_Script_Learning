//few functions are used from functions_learn.js file
const dob = {
  setDate: function (d) {
    this.date = d;
  },
  setMonth: function (m) {
    this.month = m;
  },
  setYear: function (y) {
    this.year = y;
  },
};

const todayDate = {
  setDate: function (d) {
    this.date = d;
  },
  setMonth: function (m) {
    this.month = m;
  },
  setYear: function (y) {
    this.year = y;
  },
};

const returnDate = function () {
  return `${this.date}/${this.month}/${this.year}`;
};

dob.returnDate = returnDate;
todayDate.returnDate = returnDate;

dob.dateArr = function () {
  this.dArray = new Array(this.date, this.month, this.year);
};

todayDate.dateArr = function () {
  this.dArray = new Array(this.date, this.month, this.year);
};

dobArr = new Array(16, 11, 1971);
todayArr = new Array(17, 7, 2023);
valueType = ["Date", "Month", "Year"];

let propertyName = "";

for (let i = 0; i < dobArr.length; i++) {
  //console.log(i,valueType[i])
  propertyName = "set" + valueType[i];
  dob[propertyName](dobArr[i]);
  todayDate[propertyName](todayArr[i]);
}

dob.dateArr();
todayDate.dateArr();

console.log(dob.returnDate());
console.log(todayDate.returnDate());

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

function totDays() {
  if (dob.year > todayDate.year) {
    return `Date of birth is greater than todays date`;
  }

  if (dob.year == todayDate.year) {
    let daysDiff =
      revTotDays(dob.date, dob.month, dob.year) -
      revTotDays(todayDate.date, todayDate.month, todayDate.year);
    if (daysDiff >= 0) {
      return daysDiff;
    } else {
      return `Date of birth is greater than todays date`;
    }
  } else {
    let yearDifference = todayDate.year - dob.year - 1;
    leapYearCount = 0;
    for (let y = dob.year + 1; y < todayDate.year; y++) {
      if (checkLeapYear(y)) {
        leapYearCount += 1;
      }
    }
    let totDaysPassed =
      revTotDays(dob.date, dob.month, dob.year) +
      365 * yearDifference +
      leapYearCount +
      dayNumber(todayDate.date, todayDate.month, todayDate.year);
    return totDaysPassed;
  }
}

console.log(totDays());
