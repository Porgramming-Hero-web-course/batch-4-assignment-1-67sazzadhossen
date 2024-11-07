// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
const array :number[] = [1,2,3,4,5]

const sumOfNumbers = (nums: number[]): number => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum =sum +  nums[i];
  }
  return sum;
};

console.log(`Sum of numbers is : `, sumOfNumbers(array));
