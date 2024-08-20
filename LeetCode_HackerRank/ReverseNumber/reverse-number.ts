function reverseNumber(n: number, reversed = 0): number {
    if (n == 0) {
      return reversed;
    }
  
    const lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;
    return reverseNumber(Math.floor(n / 10), reversed);
  }

  function reverse2(x: number): number {
    let result = 0;
    if (x < 0) result = reverseNumber(x * -1) * -1;
    else result = reverseNumber(x);
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31)) return 0;
    return result;
  }
  
  function reverseN(n: number) {
    let numberReversed = 0;
    while (n > 0) {
      numberReversed = numberReversed * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return numberReversed;
  }
  
  function reverse(x: number): number {
    let result = 0;
    if (x < 0) result = reverseN(x * -1) * -1;
    else result = reverseN(x);
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31)) return 0;
    return result;
  }

