// Mathematical functions

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('factorial expects a non-negative integer');
  }

  // n! = n * (n-1) * ... * 1
  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

function isPrime(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('isPrime expects a non-negative integer');
  }

  // Prime numbers are > 1 and divisible only by 1 and themselves
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function generateFibonacci(terms) {
  if (!Number.isInteger(terms) || terms < 0) {
    throw new TypeError('generateFibonacci expects a non-negative integer');
  }

  // Fibonacci starts with 0, 1
  if (terms === 0) {
    return [];
  }
  if (terms === 1) {
    return [0];
  }
  const sequence = [0, 1];
  for (let i = 2; i < terms; i += 1) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}
