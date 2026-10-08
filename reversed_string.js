//Reversing the string using for loop

let test ="Testleaf"

let reversed =""

for(let i=test.length-1; i>=0; i--)
{

    reversed = reversed + test[i]
}

console.log(reversed) 



//Alternative Approach
//let test ="Testleaf"
//let rev1=test.split('').reverse().join('')
//console.log(rev1)


