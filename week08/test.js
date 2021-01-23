function dfs(map, s) {
  let set = new Set(map);
  for (let i = 0, j = 0; i <= s.length;) {
    const word = s.slice(j, i);
    if (set.has(word)) {
      j = i;
      set.delete(word);
      if (j === s.length) {
        return 'yes'
      }
    } else {
      i++;
    }
  }
  return 'no'
}
console.log(dfs(['good', 'an', 'bad', 'teacher', 'student'], 'agoodteacher'))
console.log('z'.charCodeAt());