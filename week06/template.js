const {
    time
} = require('console');
const {
    COPYFILE_FICLONE_FORCE
} = require('constants');

// Exercise 1
function reduceFraction(num, den) {
    let arr = [];
    const GCD = (num, den) => {
        if (num % den == 0) {
            return den
        }
        return GCD(den, num % den);
    }
    let gcd = GCD(num, den);
    arr[0] = num / gcd;
    arr[1] = den / gcd;
    return arr;
}

// Exercise 2
function isMagicDate(day, month, year) {
    let mut = new RegExp(`(${day * month})$`)
    return mut.test(year + '');
}

// Exercise 3
function sublist(l) {
    //sliding window
    //k range:[0,l.length]
    let arr = []
    let set = new Map();
    let len = l.length;
    for (let i = 0; i <= len; i++) {
        for (let j = 0; j < len; j++) {
            if (!set.has(l.slice(j, j + i) + '')) {
                arr.push(l.slice(j, j + i)) //cut out
                set.set(l.slice(j, j + i) + '', '') //remove duplication
            }
        }
    }
    return arr;
}

// Exercise 4
function pigLatin(word) {
    let reg = new RegExp(/^[A-Z]/)
    let p = new RegExp(/\W$/);
    let capital = reg.test(word[0]);
    let c = 0;
    let ar;
    word = word.split('')
    let punctuation = p.test(word.join('')) == true ? word.splice(-1, 1) : '';
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < word.length; i++) {
        let index = vowel.indexOf(word[i]);
        if (index > -1) {
            c = i;
            break;
        }
    }
    if (c == 0 && punctuation == '') {
        return word.join('') + 'way';
    } else if (c == 0 && punctuation != '') {
        return word.join('') + 'way' + punctuation;
    } else {
        word = word.join('').toLowerCase().split('')
        ar = word.splice(0, c);
    }
    word.splice(word.length, 0, ...ar);
    word = word.join('') + 'ay' + punctuation;
    return capital ? word.replace(word[0], word[0].toUpperCase()) : word;
}

// Exercise 5
function morseCode(message) {
    let map = new Map();
    map.set('A', '.-');
    map.set('B', '-...');
    map.set('C', '-.-.');
    map.set('D', '-..');
    map.set('E', '.');
    map.set('F', '..-.');
    map.set('G', '--.');
    map.set('H', '....');
    map.set('I', '..');
    map.set('J', '.---');
    map.set('K', '-.-');
    map.set('L', '.-..');
    map.set('M', '--');
    map.set('N', '-.');
    map.set('O', '---');
    map.set('P', '.--.');
    map.set('Q', '--.-');
    map.set('R', '.-.');
    map.set('S', '...');
    map.set('T', '-');
    map.set('U', '..-');
    map.set('V', '...-');
    map.set('W', '.--');
    map.set('X', '-..-');
    map.set('Y', '-.--');
    map.set('Z', '--..');
    map.set('1', '.----');
    map.set('2', '..---');
    map.set('3', '...--');
    map.set('4', '....-');
    map.set('5', '.....');
    map.set('6', '-....');
    map.set('7', '--...');
    map.set('8', '---..');
    map.set('9', '----.');
    map.set('0', '-----');
    message = message.toUpperCase().split('');
    let s = [];
    for (let i = 0; i < message.length; i++) {
        if (!map.has(message[i])) continue;
        s.push(map.get(message[i]));
    }
    return s.join(' ');
}

// Exercise 6
function int2Text(num) {
    let s = '';
    let numSet = new Map();
    let hunSet = new Map();
    let tenSet = new Map();
    numSet.set('0', 'zero');
    numSet.set('1', 'one');
    numSet.set('2', 'two');
    numSet.set('3', 'three');
    numSet.set('4', 'four');
    numSet.set('5', 'five');
    numSet.set('6', 'six');
    numSet.set('7', 'seven');
    numSet.set('8', 'eight');
    numSet.set('9', 'nine');

    hunSet.set('100', 'one hundred');
    hunSet.set('200', 'two hundred');
    hunSet.set('300', 'three hundred');
    hunSet.set('400', 'four hundred');
    hunSet.set('500', 'five hundred');
    hunSet.set('600', 'six hundred');
    hunSet.set('700', 'seven hundred');
    hunSet.set('800', 'eight hundred');
    hunSet.set('900', 'nine hundred');

    tenSet.set('10', 'ten');
    tenSet.set('11', 'eleven');
    tenSet.set('12', 'twelve');
    tenSet.set('13', 'thirteen');
    tenSet.set('14', 'fourteen');
    tenSet.set('15', 'fifteen');
    tenSet.set('16', 'sixteen');
    tenSet.set('17', 'seventeen');
    tenSet.set('18', 'eighteen');
    tenSet.set('19', 'nineteen');
    tenSet.set('20', 'twenty');
    tenSet.set('30', 'thirty');
    tenSet.set('40', 'forty');
    tenSet.set('50', 'fifty');
    tenSet.set('60', 'sixty');
    tenSet.set('70', 'seventy');
    tenSet.set('80', 'eighty');
    tenSet.set('90', 'ninety')

    tenSet.set('2', 'twenty');
    tenSet.set('3', 'thirty');
    tenSet.set('4', 'forty');
    tenSet.set('5', 'fifty');
    tenSet.set('6', 'sixty');
    tenSet.set('7', 'seventy');
    tenSet.set('8', 'eighty');
    tenSet.set('9', 'ninety')
    num = num + '';
    let len = num.length;
    if (len == 1) {
        return numSet.get(num);
    } else if (len == 2) {
        if (tenSet.has(num)) {
            return tenSet.get(num);
        } else {
            s += tenSet.get(num[0]) + ' ' + numSet.get(num[1]);
        }
    } else {
        if (hunSet.get(num)) {
            return hunSet.get(num);
        } else {
            if (tenSet.has(num.slice(1))) {
                s += numSet.get(num[0]) + ' hundred ' + tenSet.get(num.slice(1));
            } else if (num[1] == '0') {
                s += numSet.get(num[0]) + ' hundred ' + numSet.get(num[2]);
            } else {
                s += numSet.get(num[0]) + ' hundred ' + tenSet.get(num[1]) + ' ' + numSet.get(num[2]);
            }
        }
    }
    return s;
}

// Exercise 7
function missingComment(filename) {
    const fs = require('fs')
    let data = fs.readFileSync(filename, 'utf-8')
    let strArr = data.split(/\n/)
    let arr = []
    //for loop,judge which word is beginning with function
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].match(/^(function)/)) {
            //if last row is comments,continue
            let pre = strArr[i - 1]
            if (pre.match(/\/\//)) {
                continue;
            } else {
                //gain the function name
                let s = strArr[i].match(/(?<=function).+(?=\()/)[0];
                arr.push(s.trim());
            }
        }
    }
    return arr;
}

// Exercise 8
function consistentLineLength(filename, length) {
    const fs = require('fs');
    let data = fs.readFileSync(filename, 'utf-8');
    let arr = []
    console.log(data)
    let str = data.replace(/\n/g, ' ').split(' ')
    let s = '';
    //for loop,put every legal words into strings
    for (let i = 0; i < str.length; i++) {
        //judge string's length
        if (s.length + str[i].length > length) {
            arr.push(s.trim())
            s = str[i] + ' ';
        } else {
            s += str[i] + ' ';
        }
    }
    //put last one to array
    arr.push(s.trim())
    return arr;
}

// Exercise 9
function knight(start, end, moves) {
    //boolean initialization
    let b = false;
    let startRow = start[1] - 1;
    let endRow = end[1] - 1;
    let startCol = Math.abs('a'.codePointAt() - start[0].codePointAt());
    let endCol = Math.abs('a'.codePointAt() - end[0].codePointAt());
    const dfs = (row, col, times) => {
        //judgement:Ends the recursion when row or col or running times pass limitation.
        if (row > endRow || col > endCol || times > moves) {
            return;
        }
        //judgement:set boolean as true when meets the limitation.
        if (row == endRow && col == endCol && times <= moves) {
            b = true;
            return;
        }
        //drill down
        dfs(row += 2, col += 1, times += 1);
        //because row and col has been changed in recursion above,we have to deassign them.
        row = startRow, col = startCol
        dfs(row += 1, col += 2, times += 1);
    }
    dfs(startRow, startCol, 0);
    return b;
}
// Exercise 10
function warOfSpecies(environment) {
    let row = environment.length;
    let col = environment[0].length;
    
    return undefined
}

module.exports = {
    reduceFraction: reduceFraction,
    isMagicDate: isMagicDate,
    sublist: sublist,
    pigLatin: pigLatin,
    morseCode: morseCode,
    int2Text: int2Text,
    missingComment: missingComment,
    consistentLineLength: consistentLineLength,
    knight: knight,
    warOfSpecies: warOfSpecies
}