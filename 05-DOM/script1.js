"use strict";
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

//TODO add a function to check if the date entered is valid or not

// adding eventlistener in button
const clickEventFxn = function () {
  //updating Today date value in object with latest inputs
  for (let i = 0; i < today.classes.length; i++) {
    today["set" + today.order[i]](
      Number(document.querySelector([today.classes[i]]).value)
    );
    console.log(today[today.order[i]]);
  }
  //adding dob value in object
  let dValue;
  let dobFlag = false; //if flag is true then we can proceed with further caluclation
  for (let i = 0; i < dob.classes.length; i++) {
    //console.log(document.querySelector(dob.classes[i]).value);
    dValue = document.querySelector([dob.classes[i]]).value;
    dValue = Number(dValue);
    dob["set" + today.order[i]](dValue);
  }
  //using totDays function will find the total no. of days passed in between "from" "to"
  let tDays = totDays(
    dob.date,
    dob.month,
    dob.year,
    today.date,
    today.month,
    today.year
  );
  let displayAns;
  if (tDays == -1) {
    displayAns = "From date is bigger than To date";
  } else {
    displayAns = `Its been ${tDays} days passed`;
  }
  document.querySelector("#ans-para").textContent = displayAns;
};
//listining +event - clicking button
document.querySelector("#form-btn").addEventListener("click", clickEventFxn);
console.log(today.fullDate());
console.log(dob.fullDate());
