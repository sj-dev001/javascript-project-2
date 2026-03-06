// Array functions

function findMaximum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('findMaximum expects an array');
  }
  if (numbers.length === 0) {
    throw new Error('findMaximum expects a non-empty array');
  }

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      throw new TypeError('findMaximum expects only numbers in the array');
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

function findMinimum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('findMinimum expects an array');
  }
  if (numbers.length === 0) {
    throw new Error('findMinimum expects a non-empty array');
  }

  let min = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      throw new TypeError('findMinimum expects only numbers in the array');
    }
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('sumArray expects an array');
  }

  let total = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      throw new TypeError('sumArray expects only numbers in the array');
    }
    total += numbers[i];
  }
  return total;
}

function filterArray(items, condition) {
  if (!Array.isArray(items)) {
    throw new TypeError('filterArray expects an array');
  }
  if (typeof condition !== 'function') {
    throw new TypeError('filterArray expects a function as condition');
  }

  const result = [];
  for (let i = 0; i < items.length; i += 1) {
    if (condition(items[i])) {
      result.push(items[i]);
    }
  }
  return result;
}
