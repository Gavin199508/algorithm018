/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (g, s) => {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let child = 0, cookie = 0;

  while (child < g.length && cookie < s.length) {
      if (g[child] <= s[cookie]) {
          child++;
      }
      cookie++;
  }

  return child;
};