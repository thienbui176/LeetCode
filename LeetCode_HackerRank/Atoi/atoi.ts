const ASCII_SPACE = 32;
const ASCII_MINUS = 45;
const ASCII_PLUS = 43;
const ASCII_NUMBER_MIN = 48;
const ASCII_NUMBER_MAX = 57;
const MAX = Math.pow(2, 31) - 1;
const MIN = Math.pow(-2, 31);

const isNumber = (code: number) =>
  code >= ASCII_NUMBER_MIN && code <= ASCII_NUMBER_MAX;
const isSpace = (code: number) => code == ASCII_SPACE;
const isMinus = (code: number) => code == ASCII_MINUS;
const isPlus = (code: number) => code == ASCII_PLUS;

function myAtoi(s: string): number {
  let result = 0;
  let hasNumber = false;
  let hasMinus = false;
  let hasPlusOrMinus = false;
  const lengthS = s.length;

  for (let i = 0; i < lengthS; i++) {
    const CODE = s[i].charCodeAt(0);
    const isNum = isNumber(CODE);
    if (!hasNumber) {
      if (isNum) {
        result = result + +s[i];
        hasNumber = true;
      } else {
        const isM = isMinus(CODE);
        const isP = isPlus(CODE);
        if (hasPlusOrMinus) return 0;
        if ((isM && hasPlusOrMinus) || (isP && hasPlusOrMinus)) return 0;

        if (isM) {
          hasMinus = true;
          hasPlusOrMinus = true;
        } else if (isP) {
          hasPlusOrMinus = true;
        } else if (!isSpace(CODE)) {
          return 0;
        }
      }
    } else {
      if (!isNum) break;
      result = result * 10 + +s[i];
    }
  }
  const finalResult = hasMinus ? result * -1 : result;
  if (finalResult < MIN) return MIN;
  if (finalResult > MAX) return MAX;
  return finalResult;
}