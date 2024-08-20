const numbers = [3, 1, 6, 2, 4, 6, 8,9];

const getMax2th = (array: number[]) => {
  let max = numbers[0];
  let maxth2 = numbers[0];
  array.forEach((num) => {
    if (maxth2 < num) maxth2 = num;
    if (maxth2 > max) {
      const temp = max;
      max = maxth2;
      maxth2 = temp;
    }
  });
  return maxth2
};

console.log(getMax2th(numbers))
