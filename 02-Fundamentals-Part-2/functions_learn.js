"use strict"

function logger(){
    console.log("This is a log message")
}
function checkLeapYear(year1) {
//if the year is evenly divisible by 4 but not by 100 with the exception 
//of getting fully divisible by 400  then the year is a LeapYear
    if (year1%4 == 0){
        if (year1%100 == 0 && (year1 %400 != 0) ){
            return false;
        }
        else{
            return true;
        }
    }
    else { //year is not a leap year
        return false;
        }
}

function cPrint(msg){
    console.log(msg)
}

function daysPassedMonth(month){// to know how many days passed upto the month
    let monthDays= 0
    //it is written this way to explore the switch case and ytake advatange of not using break statement
    switch (month){
        case (12):
            monthDays += 31
        case (11):
            monthDays += 30 
        case (10):
            monthDays +=31
        case (9):
            monthDays += 30
        case(8):
            monthDays += 31
        case(7):
            monthDays += 31
        case(6):
            monthDays += 30
        case(5):
            monthDays += 31
        case(4):
            monthDays += 30
        case(3):
            monthDays += 31
        case(2):
            monthDays += 28
        case(1):
            monthDays += 31
            break
        default:
            monthDays = 0    


    }
    return monthDays
}

function dayNumber(date,month,year){
    logger()
    let yearIsLeap = false
    if (month>3){ //if the month is post Feburary then we need to know if it a leap year
        // (to check number of days in feb. )
        yearIsLeap = checkLeapYear(year)
    }
    let noOfDays = date + (daysPassedMonth(month-1)) + (yearIsLeap?1 :0)
return noOfDays
    
}

cPrint(daysPassedMonth(12))
cPrint(daysPassedMonth(10))
cPrint(daysPassedMonth(1))
cPrint(daysPassedMonth(6))
cPrint(dayNumber(4,7,2023))
cPrint(dayNumber(4,7,2020))
cPrint(dayNumber(31,12,2020))
//2 dyas of defining a Function
// 1) function decleration
cPrint("with function decelaration ; we can call a function earlier and define it later")

cPrint(`The number 45345 is ${evenOrOdd(5)}. `)
function evenOrOdd(num){
    if (num%2 == 0){
        return("Even")
    }
    else{
        return("Odd")
    }
}

//2) function expression
const evenOrOdd2 = function(num){
    if (num%2 == 0){
        return("Even")
    }
    else{
        return("Odd")
    } 
}

cPrint(`The number 5 is ${evenOrOdd(5)}. `)
cPrint(`The number 5678 is ${evenOrOdd2(5678)}`)



//next task find the differnce of two dates in [number of days] format