function lengthOfLastWord(s) {
   
    s = s.trim();

    
    let words = s.split(" ")

    
    let lastword = words[words.length - 1]

    console.log("Last word:", lastword)
    console.log("Last word length:", lastword.length)
}


    lengthOfLastWord("Hello this is Sunday")
