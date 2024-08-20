const char: { [key: string]: string } = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const openChars = ["(", "{", "["];

function isValid(s: string): boolean {
  const stack: string[] = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (openChars.includes(s[i])) {
      stack.push(s[i]);
      continue;
    }
    if (char[stack[stack.length - 1]] == s[i]) {
      stack.pop();
      continue;
    } else return false;
  }
  return stack.length == 0;
}

console.log(isValid("(])"));
