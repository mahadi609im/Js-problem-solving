function evenNumAvg(numArr) {
   let evenNums = []
   for (let i of numArr) {
      if (i % 2 == 0) {
         evenNums.push(i)
      }
   }
   
   let sumOfEv = evenNums.reduce((acc, curr) => acc + curr, 0)

   let lenOfEv = evenNums.length

   
   let avgNums = sumOfEv / lenOfEv
   console.log(avgNums)

}

let arr = [1, 5, 2, 6, 7, 9, 8, 12, 14, 15, 4]
evenNumAvg(arr)