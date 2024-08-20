const romanNumeralValues = [
  1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
];

function intToRoman(num: number) {
  const lengthRomanNumValues = romanNumeralValues.length;
  let result = "";
  for (let i = 0; i < lengthRomanNumValues; i++) {
    const numChar = Math.floor(num / romanNumeralValues[i]);
    switch (romanNumeralValues[i]) {
      case 1000:
        result += "M".repeat(numChar);
        break;
      case 900:
        result += "CM".repeat(numChar);
        break;
      case 500:
        result += "D".repeat(numChar);
        break;
      case 400:
        result += "CD".repeat(numChar);
        break;
      case 100:
        result += "C".repeat(numChar);
        break;
      case 90:
        result += "XC".repeat(numChar);
        break;
      case 50:
        result += "L".repeat(numChar);
        break;
      case 40:
        result += "XL".repeat(numChar);
        break;
      case 10:
        result += "X".repeat(numChar);
        break;
      case 9:
        result += "IX".repeat(numChar);
        break;
      case 5:
        result += "V".repeat(numChar);
        break;
      case 4:
        result += "IV".repeat(numChar);
        break;
      case 1:
        result += "I".repeat(numChar);
        break;
    }
    if (numChar) {
      num = num % romanNumeralValues[i];
    }
  }

  return result;
}

console.log(intToRoman(3749));
