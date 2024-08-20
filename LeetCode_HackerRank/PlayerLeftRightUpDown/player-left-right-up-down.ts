const UP = "^";
const DOWN = "v";
const LEFT = "<";
const RIGHT = ">";

function solution2(S: string): number {
  let result = 0;
  let temp: number[] = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === UP || S[i] === DOWN) {
      temp.push(1);
      result++;
    } else if (S[i] === LEFT) {
      if (i === 0) {
        temp.push(1);
        result++;
      } else {
        if (temp[i - 1] === 1) {
          temp.push(1);
          result++;
        } else {
          temp.push(0);
        }
      }
    } else {
      if (i === S.length - 1) {
        temp.push(1);
        result++;
      } else {
        temp.push(0);
      }
    }
  }

  return result;
}

console.log(solution2("><^v"));
console.log(solution2("<<^<v>>"));
