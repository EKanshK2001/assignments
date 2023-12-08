/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    else return Math.max(...numbers);                            //solution 1     0.316s

    // let max = numbers[0];
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] > max) {
    //         max = numbers[i];
    //     }
    // }
    // return max;                                                  //solution 2     0.309s

    // numbers.sort(function(a, b) {return a - b});                 //sort function uses the first thing it sees in a number to sort things 
    // const max = numbers[numbers.length - 1];                     //hence need a function {return a - b} for it to determine numeric sort.        ik its stupid
    // // console.log(numbers);     
    // // console.log(max);
    // return max;                                                  //solution 3     0.358s
}

module.exports = findLargestElement;