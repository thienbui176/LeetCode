"use strict";
const phoneKeyboard = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
];
const x = (result = [], digits, index) => {
    const r2 = [];
    if (index == digits.length)
        return result;
    const arrKey = phoneKeyboard[+digits[index]] || [];
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < arrKey.length; j++) {
            r2.push(`${result[i]}${arrKey[j]}`);
        }
    }
    return x(r2, digits, index + 1);
};
function letterCombinations(digits) {
    let result = x(phoneKeyboard[+digits[0]], digits, 1);
    return result;
}
console.time();
console.log(letterCombinations("2"));
console.timeEnd();
//# sourceMappingURL=index.js.map