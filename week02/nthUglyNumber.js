/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let dp = new Array(n).fill(0);
  let ug_2 = 0, ug_3 = 0, ug_5 = 0;
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
      let latter = dp[i - 1];
      while (latter >= dp[ug_2] * 2) ug_2++;
      while (latter >= dp[ug_3] * 3) ug_3++;
      while (latter >= dp[ug_5] * 5) ug_5++;
      dp[i] = Math.min(dp[ug_2] * 2, dp[ug_3] * 3, dp[ug_5] * 5);
  }
  return dp[n - 1];
};