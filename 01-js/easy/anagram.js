/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  function makeCorrectString(str) {
    str = str.replace(/\s/, '').toLowerCase().split('').sort().join('');
    // console.log(str);
    return str;
  }
  
  str1 = makeCorrectString(str1);
  str2 = makeCorrectString(str2);


  if (str1.length != str2.length) {
    return false;
  }

  if (str1 === str2) {
    return true;
  }
  else return false;
}

module.exports = isAnagram;
