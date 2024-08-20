function shortestUniqueSubstring(S: string): number {
  const seen: { [key: string]: number } = {};
  let minLength = Infinity;

  for (let i = 0; i < S.length; i++) {
    for (let j = i + 1; j <= S.length; j++) {
      const substring = S.substring(i, j);
      if (!seen[substring]) {
        seen[substring] = 1;
      } else {
        seen[substring]++;
      }
    }
  }

  for (const key in seen) {
    if (seen[key] === 1) {
      minLength = Math.min(minLength, key.length);
    }
  }

  return minLength === Infinity ? -1 : minLength;
}

console.log(shortestUniqueSubstring("abaaba")); // Output: 2
console.log(shortestUniqueSubstring("zyzyzyz")); // Output: 5
console.log(shortestUniqueSubstring("aabbbabaaa")); // Output: 3
