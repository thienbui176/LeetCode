const memo: { [key: number]: number } = { 0: 0, 1: 1, 2: 2 };
function climbStairs(n: number): number {
  if (memo[n]) {
    return memo[n];
  }

  return (memo[n] = climbStairs(n - 1) + climbStairs(n - 2));
}