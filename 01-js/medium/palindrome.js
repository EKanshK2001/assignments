/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  if (str.length === 0 || str.length === 1) return true;

  let cleanStr = str.toLowerCase().replace(/[^a-zA-Z]/g, '');
  // console.log(cleanStr);

  let left = 0, right = cleanStr.length - 1;
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++; right--;
  }
  return true;                                                                   //soln 1  0.224s

  // return cleanStr === cleanStr.split('').reverse().join('');                  //soln 2  0.219s (after removing spaces and lowercasing)

  //both solutions are fine however soln 1 is better if str is actually manipulated instead of making a new cleanStr
  //also both solutions work around a 100ms faster (313 ms vs 225ms) everytime when ran after the first attempt (? dunno why)
}

module.exports = isPalindrome;
