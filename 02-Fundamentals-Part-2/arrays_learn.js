//initlizing the array
//way 1
const places = ["India", "USA", "China"];
console.log(places);

//way 2
const poplulation_million = new Array(1400, 250, 130);
console.log(poplulation_million);

//arrow function
const print_population = (arr_ind, arr_place, arr_popu) =>
  console.log(
    `${arr_place[arr_ind]} has a population of ${arr_popu[arr_ind]} million .`
  );

//calling the arrow function (one-liner)
print_population(0, places, poplulation_million);
print_population(1, places, poplulation_million);
print_population(2, places, poplulation_million);

//total array length (. length)
console.log("We have the data of " + places.length + " places ");

//modifying / updating the data in  the array
poplulation_million[2] = 1350;
console.log("Update: ");
print_population(2, places, poplulation_million);

//Array with  mixed datatypes
const hobbies = ["travelling", "coding"];
const mixed_array = [
  "Kartik",
  1999,
  "Nagrota Bagwan",
  2023 - 1999,
  hobbies,
  3.14,
];
console.log("Prinitng the mixed array", mixed_array);
console.log(mixed_array);
console.log("printing using tempelate literal : ", `${mixed_array}`);
console.log(`tempelate literal : in one line ${mixed_array}`);

//**Array Operations**

//1 push: adds an element to the end of array. New array length is returend as the result of this function
console.log("ARRAY OPERATIONS");
const len_places = places.push("France");
poplulation_million.push(67);
console.log(
  "After pushing; we have now  ",
  len_places,
  "values :",
  places,
  poplulation_million
);

//2: Unshift : adds element to the begining of the array ; returns the length of new array
console.log("Unshifting", places.unshift("Nepal"));
poplulation_million.unshift(30);
console.log("ushift : ", places, poplulation_million);

//3 pop: pops out the last element from the array ; returns the popeed out element
console.log(
  "POP: the popped out place which was end of the array is : ",
  places.pop()
);
poplulation_million.pop();
console.log(places, poplulation_million);

//4 shift: removes out the first element from the array ; returns the removed element
console.log(
  "SHIFT: the removed place which was at starting of the array is : ",
  places.shift()
);
poplulation_million.shift();
console.log(places, poplulation_million);

//5 indexOf: returns the index of the passed element ; returns -1 if the element is not present
console.log("indexOf: ");
console.log("Index of India is ", places.indexOf("India"));
console.log("Index of Russia is ", places.indexOf("Russia"));
console.log(
  "Population of India in Millions is  ",
  poplulation_million[places.indexOf("India")]
);

//6: includes ; returns True if the element is included in the array else False will be returned
console.log("includes :");
console.log("Does our list have Brazil ? : ", places.includes("Brazil"));
