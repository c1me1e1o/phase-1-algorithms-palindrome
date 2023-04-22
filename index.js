function isPalindrome(word) {
  // Write your algorithm here
  //baseline
if(word.length === 1) return true;
if(word.length === 2) return word[0] === word[1]

if(word[0] === word.slice(-1)){
  return isPalindrome(word.slice(1, -1))
  }

  return false;

}


/* 
  Add your pseudocode here
*/

// 1. write a function isPalindrome with one argument, a string
// 2. should return true if string is a palindrome
// 3. should return false if it isn't a palindrome

/*
  Add written explanation of your solution here
*/

/*
  the lab is asking if "abba", "racecar", "a", "robot", "ab" are palindromes or not. So, I used slice to reiterate through the strings to compare if the strings are equivalent or not.

  So, to do that, a baseline was created. the first if statement is the baseline that returns true if the string consist of only one character.

  The second if statement reiterates through the string using slice and checks the first and last letter until the last character where it returns true.

  And, if the first letter and last letter aren't equal, then it returns false.

  for, strings like "abba" where there isn't a central letter, an if statement was created if 2 latters are equal then it returns true, depending if the first letter is equal to the last letter.




 */


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
