function maxArea(height: number[]): number {
  const length = height.length;
  let max = 0;
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      if (area > max) max = area;
    }
  }
  return max;
}

function maxArea2(height: number[]) {
  let start = 1;
  let end = height.length - 2;
  let previousValueStart = 0;
  let previousValueEnd = end + 1;
  let max = 0;
  while (start != end) {
    if (start - previousValueStart > 1) {
      const area = Math.max(height[start], height[end]) * (end - start);
      if (area > max) max = area;
      start += 1;
      previousValueStart += 1;
    } else if (end - previousValueEnd > 1) {
      const area = Math.max(height[start], height[end]) * (end - start);
      if (area > max) max = area;
      end -= 1;
      previousValueEnd -= 1;
    }
  }
  return max;
}

const calArea = (h1: number, h2: number, start: number, end: number) => {
  console.log({ h1, h2, start, end });
  const area = Math.min(h1, h2) * (end - start);
  console.log("area", area);
  return area;
};

function maxArea3(height: number[]) {
  const length = height.length - 1;
  let start = 0,
    heightStart = height[0];
  let end = length,
    heightEnd = height[length];
  let max = calArea(heightStart, heightEnd, start, end);
  heightStart > heightEnd ? end-- : start++;
  while (start != end) {
    if (heightStart > heightEnd) {
      if (height[end] > heightEnd) {
        max = Math.max(max, calArea(heightStart, height[end], start, end));
        end--;
        heightEnd = height[end];
      }
    } else {
      if (height[start] > heightStart) {
        max = Math.max(max, calArea(heightStart, height[start], start, end));
        console.log(max);

        start++;
        heightStart = height[start];
      }
      heightStart = height[start];
    }
  }
  return max;
}

console.time();
console.log(maxArea3([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.timeEnd();
