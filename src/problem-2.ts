// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.


const removeDuplicates = (nums: number[]): number[] => {
  let uniqueNumbers: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (!uniqueNumbers.includes(nums[i])) {
      uniqueNumbers.push(nums[i]);
    }
  }

  return uniqueNumbers;
};
console.log('New Array Without Duplicate Is:', removeDuplicates([1, 2, 2, 3, 4, 4, 5,6,6,6]))