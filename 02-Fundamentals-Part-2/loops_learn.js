const num = Number(prompt("Enter the number whose table who want to see"))
for (let mult = 1; mult <= 10;mult++){ //for(initilize iterator; iterator conditon( if its true then only the loop will run); iteraator increment)
    console.log(`${num} * ${mult} = ${num*mult}`)
}

const mixArray1 =["1.4 Billion Population", 27,9,7.5,["array value1","arrayValue2"],649859,true,"PROUD "]



const mixArrayTypes =[]
//we will be running the loop and inserting the type value of array element in the above array
for (let i=0;i<mixArray1.length;i++){
    mixArrayTypes[i] = typeof(mixArray1[i])
    console.log(mixArray1[i],typeof(mixArray1[i]))
}

console.log(mixArrayTypes)

const yearsDOB =[1999,2000,1971,1974,2004]
const agesDOB =[]//this array will be filled by finding the age while iterating through above array
const currYear = 2023
for (let i =0 ; i<yearsDOB.length;i++) {
    agesDOB.push(currYear - yearsDOB[i])
}

console.log(yearsDOB,agesDOB)

//continue - statement is used to skip the ongoing iteration and move to the next
console.log("---Only Strings ---")
for (let num=0;num<mixArray1.length;num++){
    if (typeof(mixArray1[num]) != "string") continue; // if the element type is not string then jump to next iterartion
    console.log(mixArray1[num],typeof(mixArray1[num]))

}


//break - is used to stop the loop iteration. during loop when it hits 'break' statement it terminates the loop 
const startNum =16
console.log("Terminate when the number is divisible by both 3 and 5. Starting from ",startNum)
console.log("Using for loop")
for (let i =startNum;i<=startNum*10;i++){
    if (i%3 == 0 && i%5==0) break;
    console.log(i)
}

//while -loop
//while(condition){ //until the condition staisfies the loop will loop
//statement / expressions
//}

console.log("---Using While Loop")
numMul = startNum
while(!(numMul%3 == 0 && numMul%5 ==0)){ //until the condition is true loop will run
    console.log(numMul)
    numMul++
}

//using random module, roll a dice,print its value till it hits 6
let ranNumDeci = 0
ranNum = 0

while(ranNum != 6){
    ranNumDeci = Math.random()
    ranNumDeci = ranNumDeci*6 // to get numbers in the range[0.0, 6.0] //decimal numbers
    ranNum = Math.trunc(ranNumDeci) // to get numbers in the range[0,5] //without decimal part; truncated number
    ranNum = ranNum+1 //[1,6] range
    console.log("Dice roll 🎲: ",ranNum)  
}