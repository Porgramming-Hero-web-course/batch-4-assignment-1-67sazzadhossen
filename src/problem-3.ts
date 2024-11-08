// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

const countWordOccurrences = (sentence: string, word: string): number => {

    const words = sentence.toLowerCase().replace(/[^\w\s]/g, '').split(" ");

  
    return words.filter(w => w === word.toLowerCase()).length;
  };
  
  const totalWord = countWordOccurrences(
    "TypeScript is great. I love TypeScript!",
    "Typescript"
  );
  
  console.log(totalWord);  
  
