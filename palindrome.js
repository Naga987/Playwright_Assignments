
function isPalindrome(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        {
            reverse = reverse + str[i];

        }
    }

   if (str === reverse) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}
}

isPalindrome("hello");