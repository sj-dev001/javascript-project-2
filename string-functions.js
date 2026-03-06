// String manipulation functions

function reverseString(text) {
  // Reverse letters in the string
  return text.split('').reverse().join('');
}

function countCharacters(text) {
  // Return how many characters are in the string
  return text.length;
}

function capitalizeWords(sentence) {
  // Make first letter uppercase in each word
  return sentence
    .split(' ')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ');
}

