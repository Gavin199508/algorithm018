class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let node = new Node(1)
node.next = new Node(2)

// console.log(node)

let nodeNext = node.next;
node.next = new Node(3);
node.next.next = nodeNext;
// console.log(node)

const delay = function (millisecond) {
  return new Promise((resolve, reject) => {
    if (typeof millisecond != 'number') reject(new Error('para must be a number'))
    setTimeout(() => {
      resolve(`我延迟了${millisecond}后执行的`)
    }, millisecond)
  })
}
const setDelaySecond = (seconds) => {
  return new Promise((resolve, reject) => {
    if (typeof seconds != 'number' || seconds > 10) reject(new Error('参数必须是number'))
    setTimeout(() => {
      resolve(`我延迟了${seconds}执行的，单位是秒`)
    }, seconds * 1000)
  })
}

delay(1000)
  .then(result => {
    console.log(result);
    return setDelaySecond(2);
  })
  .then(result => {
    console.log(result);
    return delay(1000)
  })
  .then(res => {
    console.log(res);
    console.log('完成');
  })
  .catch(err => {
    console.log(err)
  })

// (async ()=>{
//   const res = await delay(1000)
//   console.log(res);
//   console.log(await setDelaySecond(2));
//   console.log(await delay(1000));

//   console.log('完成了');
// })()
let o = {
  red_apple: '111',
  blue_apple: {
    green_apple: {
      orange_apple: '222'
    }
  }
}

function test(obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] == 'object') {
      test(obj[key])
    }
    key = key.split('_');
    // console.log(key[1].replace('a','A'))
    key[1] = key[1].replace('a', 'A')
    key = key.join('')
    console.log(key)
  })
}
console.log(test(o))

let arr = [-4, 1, 10, -1, -8, 3, 6, -9, 1];

function t(arr) {
  for (let i = 0, j = i + 1; i < arr.length; i++) {
    if (arr[i] > 0) {
      while (arr[j] > 0) {
        j++
      }
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  return arr;
}
console.log(t(arr))