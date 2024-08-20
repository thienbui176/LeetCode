function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let flag = true;
  const xString = x.toString();
  const lengthXString = xString.length - 1;
  for (let i = 0; i <= lengthXString / 2; i++) {
    flag = flag && xString[i] === xString[lengthXString - i];
  }
  return flag;
}
