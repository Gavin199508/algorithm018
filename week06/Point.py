# def reduceFraction(num, den):
#     def gcd(num1, num2):
#         if num1 % num2 == 0:
#             return num2
#         return gcd(num2, num1 % num2)
#     gcdNum = gcd(num, den)
#     return (num/gcdNum, den/gcdNum)


# print(reduceFraction(12, 15))

# l = [1, 2, 3, 4]
# arr = []
# d = {}
# for i in range(len(l)+1):
#     for j in range(len(l)):
#         if l[i:j+1] not in arr:
#             arr.append(l[i:j+1])

# s = 'Aopasd!'
# if s[-1] == '!':
#     punction = '!'
#     s = s.replace(s[-1], '')

# print(s)
# print(punction)
# print(s[0].isupper())
# print(s.index('d'))
# print(s.lower())
def pigLatin(word):
    vowel = ['a', 'e', 'i', 'o', 'u']
    b = word[0].isupper()
    c = 0
    punctuation = ''
    if word[-1] in "!?":
        punctuation = word[-1]
        word = word.replace(word[-1], '')
    for i in range(len(word)):
        if word[i] in vowel:
            c = word.index(word[i])
            break
    if c == 0 and punctuation == '':
        return word + 'way'
    elif c == 0 and punctuation != '':
        return word + 'way' + punctuation
    else:
        word = word.lower()
        ar = word[0:c]
    word = word.replace(ar, '') + ar + 'ay' + punctuation
    if b == True:
        word = word.title()
    return word


print(pigLatin('Science!'))


def int2Text(num):
    numDic = dict()
    hunDic = dict()
    tenDic = dict()
    numDic['0'] = 'zero'
    numDic['1'] = 'one'
    numDic['2'] = 'two'
    numDic['3'] = 'three'
    numDic['4'] = 'four'
    numDic['5'] = 'five'
    numDic['6'] = 'six'
    numDic['7'] = 'seven'
    numDic['8'] = 'eight'
    numDic['9'] = 'nine'

    hunDic['100'] = 'one hundred'
    hunDic['200'] = 'two hundred'
    hunDic['300'] = 'three hundred'
    hunDic['400'] = 'four hundred'
    hunDic['500'] = 'five hundred'
    hunDic['600'] = 'six hundred'
    hunDic['700'] = 'seven hundred'
    hunDic['800'] = 'eight hundred'
    hunDic['900'] = 'nine hundred'

    tenDic['10'] = 'ten'
    tenDic['11'] = 'eleven'
    tenDic['12'] = 'twelve'
    tenDic['13'] = 'thirteen'
    tenDic['14'] = 'fourteen'
    tenDic['15'] = 'fifteen'
    tenDic['16'] = 'sisteen'
    tenDic['17'] = 'seventeen'
    tenDic['18'] = 'eighteen'
    tenDic['19'] = 'nineteen'
    tenDic['20'] = 'twenty'
    tenDic['30'] = 'thirty'
    tenDic['40'] = 'forty'
    tenDic['50'] = 'fifty'
    tenDic['60'] = 'sixty'
    tenDic['70'] = 'seventy'
    tenDic['80'] = 'eighty'
    tenDic['90'] = 'ninety'

    tenDic['2'] = 'twenty'
    tenDic['3'] = 'thirty'
    tenDic['4'] = 'forty'
    tenDic['5'] = 'fifty'
    tenDic['6'] = 'sixty'
    tenDic['7'] = 'seventy'
    tenDic['8'] = 'eighty'
    tenDic['9'] = 'ninety'
    num = str(num)
    print()
    s = ''
    if len(num) == 1:
        return numDic.get(num)
    elif len(num) == 2:
        if tenDic.get(num):
            return tenDic.get(num)
        else:
            s += tenDic.get(num[0]) + ' ' + numDic.get(num[1])
    else:
        if hunDic.get(num):
            return hunDic.get(num)
        else:
            if tenDic.get(num[1:]):
                s += numDic.get(num[0]) + ' hundred ' + tenDic.get(num[1:])
            elif num[1] == '0':
                s += numDic.get(num[0]) + ' hundred ' + numDic.get(num[2])
            else:
                s += numDic.get(num[0]) + ' hundred ' + \
                    tenDic.get(num[1]) + ' ' + numDic.get(num[2])
    return s


print(int2Text(140))
