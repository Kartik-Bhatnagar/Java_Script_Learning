
const mark = {
    fullName : "Mark Miller",
    mass : 78,
    height: 1.69
}

const john ={
    fullName :"John Smith",
    mass : 92,
    height : 1.95
}

const calcBMI = function(){
    this.bmi = this.mass/(this.height*this.height)
    return this.bmi
}

mark.calcBMI = calcBMI_func
john.calcBMI =calcBMI_func
if (mark.calcBMI() == john.calcBMI()){
    console.log(`Both ${mark.fullName} and ${john.fullName} are winner with the BMI of ${john.bmi}`)
}else{
    const winner = (mark.calcBMI() > john.calcBMI() )? mark : john //returing the oject which is winner
    const looser = (mark.calcBMI() < john.calcBMI() )? mark : john 

    const consoleMsg = `${winner.fullName}'s BMI (${winner.calcBMI()}) is higher than ${looser.fullName}'s (${looser.calcBMI()})`

    console.log(consoleMsg)

}
