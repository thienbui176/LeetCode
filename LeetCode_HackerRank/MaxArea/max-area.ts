const calArea = (h1: number, h2: number, width: number) => {
    return Math.min(h1, h2) * width;
  };
  
  function maxArea(height: number[]) {
    let start = 0;
    let end = height.length - 1;
    let max = 0;
  
    while (start < end) {
      const heightStart = height[start];
      const heightEnd = height[end];
      const currentArea = calArea(heightStart, heightEnd, end - start);
      max = Math.max(max, currentArea);
      if (heightStart < heightEnd) {
        start++;
      } else {
        end--;
      }
    }
  
    return max;
  }
  
  console.time();
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
  console.timeEnd();
  