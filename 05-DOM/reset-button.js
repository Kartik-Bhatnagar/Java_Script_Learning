// adding event Listener on Check button
const displayResetBtn = function () {
  if (usrData.arr.length > 0) {
    console.log("here_____");

    document.querySelector(".result-reset").style.display = "block";
    document.querySelector(".result-reset").innerHTML = "Reset";
  }
};

document.querySelector("#form-btn").addEventListener("click", displayResetBtn);

//adding event listener on Reset button
const removeRecords = function () {
  if (usrData.arr.length > 0) {
    usrData.arr = [];
    document.querySelector(".user-data").innerHTML = "";
    document.querySelector(".comm").innerHTML = "";
  }
};

document
  .querySelector(".result-reset")
  .addEventListener("click", removeRecords);
