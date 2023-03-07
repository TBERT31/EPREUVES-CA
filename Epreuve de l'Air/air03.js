function findNonPairValue(numbers) {
    const counts = {};
    
    // Count the occurrences of each number
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (counts[number]) {
        counts[number]++;
      } else {
        counts[number] = 1;
      }
    }
    
    // Find the first number with an odd count
    for (let number in counts) {
      if (counts[number] % 2 === 1) {
        return Number(number);
      }
    }
    
    // If all numbers have even counts, return null
    return null;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 2, 1];
  const nonPairValue = findNonPairValue(numbers);
  console.log(nonPairValue); // Output: 3