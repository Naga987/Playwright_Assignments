type supportedPayment="UPI"|"CreditCard"|"PayPal"

function paymentMethod(bname:supportedPayment)
{
    switch(bname) {
        case "UPI":
            console.log("Give the UPI Payment Details");
            break;
        case "CreditCard":    
            console.log("Give the CreditCard Details");
            break;
        case "PayPal":    
            console.log("Enter the paypal detals");
            break;
        default:
            console.log("Invalid payment details");
                
    }

}

paymentMethod("UPI")