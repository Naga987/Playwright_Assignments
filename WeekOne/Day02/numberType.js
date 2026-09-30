let number;

function checkNumberType(number)
{
    

    if(number>0)
    {
        console.log("It is positive Number", number);
        
    }
    else if(number<0)
    {
        console.log("It is negetive Number", number);
    }

    else
    {
        console.log("Given number is 0", number);
        
    }
    
}

checkNumberType(0)