function billWithTip(bill){
    if (bill>= 50 && bill <=300){
        return bill+bill*0.15
    }
    else{
        return bill+bill*0.20
    }
}
//arrow function with if else oneline
const calcTip =bill=>(bill>= 50 && bill <=300) ? 0.15*bill : 0.20*bill

const bills = new Array(125,555,44)
console.log("Bills :",bills)
//intilizing an empyt array
const tips=new Array()
//inserting values in tips array one by one
tips.push(calcTip(bills[0]))
tips.push(calcTip(bills[1]))
tips.push(calcTip(bills[2]))
console.log("Tips: ", tips)
const totals = [bills[0]+tips[0],(bills[1]+tips[1]),bills[2]+tips[2]]
console.log("Totals : ",totals)
