// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer

function longestWord(words) {
   let textArr = words.split(' ')
   // console.log(textArr)

   let long = ''
   for (let word of textArr) {
      if (word.length > long.length) {
         long = word
      }
   }
   return long
}

let output = longestWord('I am learning Programming toooooooooooooo become a programmer');
console.log(output)
// sample-output: Programming
