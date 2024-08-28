// const phoneKeyboard = [
//   [],
//   [],
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"],
//   ["j", "k", "l"],
//   ["m", "n", "o"],
//   ["p", "q", "r", "s"],
//   ["t", "u", "v"],
//   ["w", "x", "y", "z"],
// ];

// const x = (result: string[] = [], digits: string, index: number): string[] => {
//   const r2: string[] = [];
//   if (index == digits.length) return result;
//   const arrKey = phoneKeyboard[+digits[index]] || [];
//   for (let i = 0; i < result.length; i++) {
//     for (let j = 0; j < arrKey.length; j++) {
//       r2.push(`${result[i]}${arrKey[j]}`);
//     }
//   }
//   return x(r2, digits, index + 1);
// };

// function letterCombinations(digits: string): string[] {
//   let result: string[] = x(phoneKeyboard[+digits[0]], digits, 1);
//   return result;
// }

// console.time();
// console.log(letterCombinations("2"));
// console.timeEnd();


