function isHappy(n: number): boolean {
  while (n > 9) {
    let sum = 0;
    while (n) {
      sum += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  if (n == 1) return true;

  return false;
}

console.log(isHappy(19));
