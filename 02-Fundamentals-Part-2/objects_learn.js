//**Objects **
//objects are use to save unstructured data; order of elements doesn;t matter
//initlizing an object
//object are key-value pair. keys are known as property
const himachal ={
    area :'55,673 km2',
    population:6864602,
    distt :['Kangra', 'Shimla', 'Mandi', 'Kullu', 'Chamba', 'Hamirpur', 'Solan',' Lahaul & Spiti', 'Simraur', 'Una', 'Bilaspur','Kinnaur'],
    gdp:'US$20 billion'
};

console.log(himachal)
//reterive the property value
//1st method usin dot .
console.log(himachal.area)
//2 using squarebracket []
console.log(himachal['population'])

// we use . method when we want to retrieve the property value by providing actual property/key name
//if in case we have to use variable name or any other thing apart from directly using key name then 
// should use square bracket method

const userChoice = prompt("Enter what do you want to know about Himachal Pradesh \n area,population,distt,gdp")
//answer = himachal.userChoice //this will not work because of the upstated reason
answer = himachal[userChoice]
alert(answer)


//Add/update a new property to the object
himachal['formation'] ="25 January 1971"
himachal.region ="North India"
himachal.gdp ="US$21Billion"
console.log(himachal)

//function expression in an object
//function decleartion doesn't work in objects
const person1 = { //person 1 object
    name : 'Krishna',
    friends:new Array ("Arjun","Bheem","Sehdev"),
    disciplines : 16,
    age : function(birthyear){
        return (2023-birthyear)
    }
}

console.log(person1)
console.log("age function :",person1.age(1999))
// adding another function in object
person1['dLicence'] = function(age){
    if (age>= 18){
        return true;
    }else{
        return false;
    }
}
//console.log(person1)
//accessing the newly defined function
let bYear =Number(prompt(`Enter the year of birth for ${person1.name}  `))
const validYear = givenBYear => (givenBYear>0 && givenBYear<=2023)? givenBYear : 2000 // if the given birth year is not valid then by default it 
//will be consider as 2000
bYear = validYear(bYear) 
console.log(`${person1.name} is ${person1.age(bYear)} years old and he has ${person1.friends.length} friends
. He is ${person1.dLicence(person1.age(bYear))?"eligible":"not eligible" } for driving `)

//adding birthyear in on=bject person1
person1.birthYear = bYear


//adding new (arrow)function property to object person1
person1.yearEvenOdd = birthYear =>birthYear%2==0 ? 'even ': 'odd '
console.log(person1.yearEvenOdd(1997))

//use 'this' in object function
//'this' will have the record who is calling it
person1.calcAge = function(){
cAge = 2023 - this.birthYear //the object who is calling it will get replaced in place of this
this.personAge = cAge// using this to create new property named personAge
return(cAge)
} 

console.log(`using 'this' ${person1.name} age is property function age : ${person1.calcAge()}\n property name age:  ${person1.personAge}`)

//adding summary property function to person 1
person1['getSummary'] = function(){
    return `${this.name} was born in the year ${this.birthYear} and toady his age is ${this.personAge}.\n
     He ${this.personAge?"eligible":"not eligible" } for driving. He is having ${this.friends.length} friends and they are
     ${this.friends}`
}

console.log(person1.getSummary())