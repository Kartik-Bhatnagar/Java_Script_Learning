//TODO add a function to check if the date entered is valid or not
const usrData = {
  arr: [],
  allPrint: function () {
    let tempString = "";
    for (let i = 0; i < this.arr.length; i++) {
      tempString += `From: ${this.arr[i][0]}/${this.arr[i][1]}/${this.arr[i][2]} To: 
        ${this.arr[i][3]}/${this.arr[i][4]}/${this.arr[i][5]} Days Gap : ${this.arr[i][6]}\n`;
    }
    return tempString;
  },
  currPrint: function (lineNo) {
    `From: ${this.arr[lineNo][0]}/${this.arr[lineNo][1]}/${this.arr[lineNo][2]} To: 
    ${this.arr[lineNo][3]}/${this.arr[lineNo][4]}/${this.arr[lineNo][5]} Days Gap : ${this.arr[lineNo][6]}\n`;
  },
  lastLinePrint: function () {
    let lineNo = this.arr.length - 1;
    return ` From:\n\n ${this.arr[lineNo][0]}/${this.arr[lineNo][1]}/${this.arr[lineNo][2]} To: 
    ${this.arr[lineNo][3]}/${this.arr[lineNo][4]}/${this.arr[lineNo][5]} Days Gap : <b>${this.arr[lineNo][6]}</b><hr>`;
  },
};
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
  let curData = []; //to store valid current date data
  let dobFlag = true; //if flag is true then we can proceed with further caluclation
  let noValueArr = [];
  for (let i = 0; i < dob.classes.length; i++) {
    //console.log(document.querySelector(dob.classes[i]).value);
    dValue = document.querySelector([dob.classes[i]]).value;
    dValue = Number(dValue);
    if (!dValue) {
      //if there is no value in input value of from/dob
      dobFlag = false;
      //maiulating CSS property if the inut value is not enetered
      document.querySelector(dob.classes[i]).style.border = "4px solid red";
      noValueArr.push(dob.order[i]);
    } else {
      //css style resting when entering in fxn
      document.querySelector(dob.classes[i]).style.border = "";
    }
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
  if (!dobFlag) {
    //if the flag is false
    displayAns = "Please type From : ";
    for (let i = 0; i < noValueArr.length; i++) {
      displayAns += noValueArr[i];
      if (i < noValueArr.length - 1) {
        displayAns += " ,";
      }
    }
  } else if (tDays == -1) {
    displayAns = "From date is bigger than To date";
  } else {
    displayAns = `Its been ${tDays} days passed`;
    curData = [
      dob.date,
      dob.month,
      dob.year,
      today.date,
      today.month,
      today.year,
      tDays,
    ];
    usrData.arr.push(curData);
    console.log(document.querySelector(".user-data"));
    document.querySelector(".user-data").innerHTML += usrData.lastLinePrint();
    console.log(document.querySelector(".user-data"));
  }
  document.querySelector("#ans-para").textContent = displayAns;
};
//listining +event - clicking button
document.querySelector("#form-btn").addEventListener("click", clickEventFxn);
console.log(today.fullDate());
console.log(dob.fullDate());
