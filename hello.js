def reverseWords = (str) => {
    reverse = str.split(" ").reverse().join(" ")
    return reverse
  }
  print(reverseWords("Its Victor and Linda"))
  