const resetFxn = function () {
  if (usrData.arr.length > 0) {
    console.log("here_____");

    document.querySelector(".result-reset").style.display = "block";
    document.querySelector(".result-reset").innerHTML = "Reset";
  }
};

document.querySelector("#form-btn").addEventListener("click", resetFxn);
