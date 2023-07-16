/*CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

 */
const billAll = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tipsAll=[]
const totalsAll =[]

for (let i=0;i<billAll.length;i++){ 
tipsAll[i] = calcTip(billAll[i]) //function from file coding_challenge_2.js
totalsAll.push(billWithTip(billAll[i])) //function from file coding_challenge_2.js
}
console.log(billAll,tipsAll,totalsAll)
