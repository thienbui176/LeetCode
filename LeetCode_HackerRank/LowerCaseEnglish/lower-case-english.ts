function solution(S: string): number {
  let maxLength = 0;
  const seen: { [key: string]: boolean } = {};

  function isEvenFrequency(substring: string): boolean {
    const frequency: { [key: string]: number } = {};
    for (const char of substring) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
    for (const key in frequency) {
      if (frequency[key] % 2 !== 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < S.length; i++) {
    for (let j = i + 1; j <= S.length; j++) {
      const sub = S.substring(i, j);
      if (!seen[sub] && isEvenFrequency(sub)) {
        maxLength = Math.max(maxLength, sub.length);
        seen[sub] = true;
      }
    }
  }

  return maxLength;
}

console.log(solution("bdaaadadb")); // Output: 6
console.log(solution("abacb")); // Output: 0
console.log(solution("zthtzh")); // Output: 6
