function branBreak(str, brandDict) {
  let j = 0;
  let arr = str.split('');
  let set = new Set(brandDict);
  for (let i = 0; i <= arr.length; i++) {
    let st = arr.slice(j, i).join('');
    if (set.has(st)) {
      console.log(st)
      j = i;
    }
  }
  return j === str.length
}
console.log(branBreak('applepenapple', ["apple", "pen"]));
