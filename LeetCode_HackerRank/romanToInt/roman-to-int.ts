const ROMAN_VALUES: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let result = 0;
  const length = s.length;
  for (let i = 0; i < length; i++) {
    const currentValueOfRoman = ROMAN_VALUES[s[i]];
    const nextValueOfRoman = ROMAN_VALUES[s[i + 1]] || 0;
    if (currentValueOfRoman >= nextValueOfRoman) {
      result = result + currentValueOfRoman;
      continue;
    }
    result = result + nextValueOfRoman - currentValueOfRoman;
    i++;
  }
  return result;
}

console.time();
console.log(romanToInt("MCMXCIV"));
console.timeEnd();
