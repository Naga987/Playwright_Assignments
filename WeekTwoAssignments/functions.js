//array-> collection of elements of heterogeneous data types
// non-primitive data type

/* let name="vidya"
let age=36
let isarrys=true */

//array
//index starts from 0
//length starts from 1
// index -> 0   ->1  ->2
//length -> 1   ->2  ->3  (length=index+1)
// let arr1=["vidya",36,true]

// console.log(arr1);  //[ 'vidya', 36, true ]

//print the single value
// console.log(arr1[0]); //vidya

//add the data to the array
// arr1[3]="welcome" // = assignment opertaor
// console.log(arr1); //[ 'vidya', 36, true, 'welcome' ]

//index of the print statement is not present
// console.log(arr1[4]);//undefined

//replace true value with false in the array
// arr1[2]=false
// console.log(arr1);//[ 'vidya', 36, false, 'welcome' ] //length=4

//push-> adds 1 or more elements at the end of the array
// arr1.push("Good", "Day")
// console.log(arr1.push("Good", "Day"))//return the new length=8
// console.log(arr1);
/* [
  'vidya', 36,
  false,   'welcome',
  'Good',  'Day',
  'Good',  'Day'
] */

//pop-> removes 1 element at the end of the array
// console.log(arr1.pop());//Day
// console.log(arr1);//[ 'vidya', 36, false, 'welcome', 'Good', 'Day', 'Good' ]

//unshift() -> add 1 or more elements at the begining of the array
// console.log(arr1.unshift(100, 150));//9
// console.log(arr1); //[ 100, 150,'vidya', 36, false, 'welcome', 'Good', 'Day', 'Good' ]

//shift() -> removes 1 element at the start of the array
// console.log(arr1.shift()); //100
// console.log(arr1);//[ 150,'vidya', 36, false, 'welcome', 'Good', 'Day', 'Good' ]

//slice()-> extracts the portion of the array and it will not modify the original array

// console.log(arr1.slice(5,7));// [ 'Good', 'Day' ]
// console.log(arr1);//[ 150,'vidya', 36, false, 'welcome', 'Good', 'Day', 'Good' ]

//splice() -> alters the original array
//1st index=>start index
//2nd index=> delete count
//add elements

// let num=[1,6,7,9,2,5]
// console.log(num.splice(1,2,"selenium",undefined,"hello world")) //[ 6, 7 ]
// console.log(num) //[ 1,'selenium', undefined, 'hello world', 9, 2, 5 ]

// console.log(num.splice(1,"11",12));//previous result [ 1, 'selenium', undefined, 'hello world', 9, 2, 5 ]
// console.log(num.splice(1,0,"11",12));//[]
// console.log(num)//[ 1, '11', 12, 'selenium', undefined, 'hello world', 9, 2, 5 ]

// includes()
let  num1=["day", "month", "year"]
console.log(num1.includes("year")) //true

//reverse()
console.log(num1.reverse()); //[ 'year', 'month', 'day' ]

//join()
console.log(num1.join('-'));//year-month-day


//sort() =>arranges in the order

let sarray=[100, "apple", 2, 10]
console.log(sarray.sort());  //[ 10, 100, 2, 'apple' ]

//actual number sorting can be done using arrow functions
let numarray=[45,20,17,8]

console.log(numarray.sort((a,b)=>a-b));  //[ 8, 17, 20, 45 ]
console.log(numarray.sort((a,b)=>b-a));  //[ 45, 20, 17, 8 ]