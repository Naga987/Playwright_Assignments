//strings- sequence of characters, represented using '',"",``

//1. string literal =assigning the value directly to the variable
//2. string objects= Creates a String object using the new String() constructor. 

//string literal-> compares value and datatype

let companyName="testleaf" //1000
let firmName="testleaf"    //1000(same memory-so unique data)//true
//let firmName="Testleaf"    //2000(different data)//false

//console.log(companyName===firmName)//true


//string objects-> compares the object reference:
// let companyName1=new String("testleaf")
// let firmName1=new String("testleaf")

// console.log(companyName1===firmName1)//false(different memory)
// console.log(companyName===companyName1)//false

//compares the string object data 
//console.log(companyName1.toString()===firmName1.toString())//true


// let course="playwright"
// console.log(course.length);  //10

//index starts from 0 and length starts from 1
//index p-0,l-1,a-2,....t-9
//length p-1, l-2,......t-10

//string methods
//escape characters \n, \t, \

// let data='it\'s a \n regression\ttesting'
// console.log(data);

/* it's a 
 regression     testing */

//cancat(),+,${}-template literal  => adds 2 strings

// let v1= "50"
// let v2= "test cases"

// console.log("there are ",v1.concat(v2));//there are  50test cases
// console.log("there are" ,+v1+ v2);//there are 50test cases
// console.log(there are ${v1} ${v2});//there are 50 test cases

//charAt()-> returns the character at the specified index

let course="playwrightg"
console.log(course.charAt(4));//w

//indexof() -> returns the index of first occuring character
console.log(course.indexOf('g'));//7 (first occurance)
console.log(course.indexOf('g',8));//10(second occurance)

//string methods


//slice() ->etracts the portion of the string and this accepts negative value

// let data="playwright"
//data.slice()
// console.log(data.slice())//playwright
// console.log(data.slice(4))//wright
// console.log(data.slice(4,9))//wrigh
// console.log(data.slice(4,10))//wright

// //negative index to print "play"
// console.log(data.slice(-10,-6));//play
// console.log(data.slice(-6,-10));//null/empty
// console.log(data.slice(10,4));//null/empty(if start index is greater than end index it returns empty value)


//substring() -> extratcts the portion of the string, this doesnot accept negative values

let data="playwright"
console.log(data.substring(-6,-10));//(0,0)//empty
console.log(data.substring(-6,5));//playw
console.log(data.substring(8,4))//swaps(4,8)=>wrig


//split()-> converts string into an array
let value="today is saturday" //3 words
let splitvalue=value.split()
console.log(splitvalue);//[ 'today is saturday' ]  =>string into array
console.log(value.split(""))  //splits char by char
/*
[
  't', 'o', 'd', 'a', 'y',
  ' ', 'i', 's', ' ', 's',
  'a', 't', 'u', 'r', 'd',
  'a', 'y'
]  */

  console.log(value.split(" ")) //[ 'today', 'is', 'saturday' ]//0 index=today,1 index=is, 2nd index=saturday
  console.log(value.split("a"));//[ 'tod', 'y is s', 'turd', 'y' ]