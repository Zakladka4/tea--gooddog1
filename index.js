// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Helper function to reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Helper function to count the number of vowels in a string
  function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  // Example usage of helper functions
  console.log(capitalizeFirstLetter('hello')); // Output: Hello
  console.log(reverseString('world')); // Output: dlrow
  console.log(countVowels('javascript')); // Output: 3
  