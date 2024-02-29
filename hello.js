const reverseWords = (str) => {
    let reverse = str.split(" ").reverse().join(" ")
    return reverse
  }
  console.log(reverseWords("Its Victor and Linda"))
  