
// Reverse of string
function reverseFunction() {
    let str = "This is Ravi Mule string";
    var revStr = "";
    for(let i = str.length - 1; i > 0; i--) {
        revStr = revStr+ str[i];
    }
    console.log("Reverse of string is: ", revStr);
}

// <=======================================================================================================================================================================================>
// Get Unique number from array list
function getUniqueNumbersFromArray() {
    let array = [1,2,4,2,6,7,8,6,1,9,5,3,7,0,29,24,99,30,29];
    let uniqueNumbersArray = array.filter((element, index) => array.indexOf(element) === index);
    console.log("Unique number from array is:", uniqueNumbersArray);
}

// <=======================================================================================================================================================================================>
// Get repetitive elements from array list
function getRepetitiveNumbersFromArray() {
    let array = [1,2,4,2,6,7,8,6,1,9,5,3,7,0,29,24,99,30,29];
    let uniqueNumbersArray = array.filter((element, index) => array.indexOf(element) !== index);
    array.forEach(element => {
        
    });
    console.log("Repeatitive number from array is:", uniqueNumbersArray);
}

// <=======================================================================================================================================================================================>
// Get non-repetitive elements from array list
function getNonRepetitiveNumbersFromArray() {
    let array = [1,2,4,2,6,7,8,6,1,9,5,3,7,0,29,24,99,30,29];
    let uniqueNumbersArray = [];
    let counter = 0;
    array.forEach((element1, index1) => {
        counter = 0;
        array.forEach((element2, index2) => {
            if(element1 === element2 && array[index1] === array[index2]) {
                counter++;
            }
        });
        if(counter === 1) {
            uniqueNumbersArray.push(element1);
        }
    });
    console.log("Non Repeatitive number from array is:", uniqueNumbersArray);
}

// <=======================================================================================================================================================================================>
// Sort numbers array in ascending & descending order using sort method
function sortNumbersArray() {
    let array = [7,2,4,3,5,1,9,6,8,0];
    let sortArrayAscending = array.sort((a, b) => a-b);
    console.log("numbers sortArrayAscending: ", sortArrayAscending);
    let sortArrayDescending = array.sort((a, b) => b-a);
    console.log("numbers sortArrayDescending: ", sortArrayDescending);
}

// <=======================================================================================================================================================================================>
// Sort strings array in ascending & descending order using sort method
function sortStringsArray() {
    let stringsArray = ['ravi', 'mule', 'vimal', 'ajit', 'biru', 'sam', 'jitesh', 'vishal', 'ram'];
    let sortedArrayAscending = stringsArray.sort((a, b) => a.localeCompare(b));
    console.log("sorted strings array Ascending: ", sortedArrayAscending);
    let sortedArrayDescending = stringsArray.sort((a, b) => b.localeCompare(a));
    console.log("sorted strings array Descending: ", sortedArrayDescending);
}

// <=======================================================================================================================================================================================>
// Remove duplicates from array and get sorted array in reverse manner.

  function getUniqueReverseSortedArrray() {
    let arr = [1, 4, 7, 2, 4, 6, 3];
    let uniqueArray = arr.filter((element, index) => arr.indexOf(element) === index);
    let rev = sortArray(uniqueArray);
    console.log("Reverse: ", rev);
  }

  function sortArray(arr) {
    for(let i=0; i< arr.length; i++) {
      for(let j=0; j< arr.length-i-1; j++) {
        if (arr[j] > arr[j+1]) {
          swap(arr,j,j+1);
        }
      }
    }
    return getReverseArr(arr);
  }

  function getReverseArr(arr) {
    let reversed = [];
    for(let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }

  function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
// <=======================================================================================================================================================================================>
//  Extract first non repeating string from the given input considering all negative scenarios as well.

  function extractNonRepeatingCharacter() {
    let str = "madam";
    let firstNonRepeatingChar = extractNonRepeatingChar(str);
    console.log("firstNonRepeatingChar: ","'"+firstNonRepeatingChar+"'");
  }

  function extractNonRepeatingChar(str) {
    if(str) {
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
          return char;
        }
      }
      return "_";
    } else {
      return "Please enter valid input...!";
    }
  }


// <=======================================================================================================================================================================================>
// get number of occurances of a given string & character from the sentence

function countOccurances() {
    const sentence = "This is the sample sentence. This sentence contains the word sentence multiple times";
    const regex = new RegExp('sentence', 'g');
    const count = sentence.match(regex).length;
    console.log("character/string matches: ", count);
}

// <=======================================================================================================================================================================================>
// write a function to check whether the given string is palindrome or not

function getPalindrome(str) {
  const palindromeStr = (str === str.split("").reverse().join("") ? 'The given string is palindrome' : 'The given string is not a palindrome');
  console.log("palindromeStr: ", palindromeStr);
  return palindromeStr;
}

reverseFunction();
getUniqueNumbersFromArray();
getRepetitiveNumbersFromArray();
getNonRepetitiveNumbersFromArray();
sortNumbersArray();
sortStringsArray();
getUniqueReverseSortedArrray();
extractNonRepeatingCharacter();
countOccurances();
getPalindrome('madam');