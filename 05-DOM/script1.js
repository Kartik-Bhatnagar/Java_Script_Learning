"use strict";

//["from" and "dob"],["to" and "today"] are used interchangebly
console.log("script1.js");
const pText = document.querySelector("#para-dob").textContent;
console.log(pText);
document.querySelector("#para-dob").textContent = "From";
document.querySelector("#user-para").textContent = "To";

const dob = {
  //declearing object to store dob/from data
  classes: [".dob-date", ".dob-month", ".dob-year"],
  order: ["date", "month", "year"],
  setdate: function (d) {
    this.date = d;
  },
  setmonth: function (m) {
    this.month = m;
  },
  setyear: function (y) {
    this.year = y;
  },
  fullDate: function () {
    return `# ${this.date} ${this.month} ${this.year}`;
  },
};

const today = {
  //setting default dates
  date: 19,
  month: 7,
  year: 2023,
  classes: [".user-date", ".user-month", ".user-year"],
  order: ["date", "month", "year"],
  setdate: function (d) {
    this.date = d;
  },
  setmonth: function (m) {
    this.month = m;
  },
  setyear: function (y) {
    this.year = y;
  },
  fullDate: function () {
    return `# ${this.date} ${this.month} ${this.year}`;
  },
};

today.setdate(20);
//inserting current day value in input form
for (let i = 0; i < today.classes.length; i++) {
  document.querySelector([today.classes[i]]).value = today[today.order[i]];
  console.log(today[today.order[i]], [today.classes[i]]);
}
