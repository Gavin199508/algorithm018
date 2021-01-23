# -*- coding: UTF-8 -*-

import string
import math


def isPower(a, b):
    if a == 1 or a == b:
        return True
    elif a % b == 0:
        return isPower(a/b, b)
    else:
        return False


print(isPower(16, 2))


def gcd(a, b):
    if a % b == 0:
        return b
    else:
        return gcd(b, a % b)


print(gcd(16, 8))


def loan(n, la):
    if n <= 1:
        return la
    else:
        return loan(n-1, la + (100000*0.05))


print(loan(2, 0))


def round_n(n):
    return math.ceil(n/1000) * 1000


def compute_debt(n):
    if n == 0:
        return 100000
    return int(round_n(compute_debt(n-1)*1.05))


def netsted_sum(t):
    result = 0
    for ts in t:
        result += sum(ts)
    return result


print(netsted_sum([[1, 3, 4], [4], [5, 6]]))


def cumsum(t):
    result = []
    total = 0
    for elem in t:
        total += elem
        result.append(total)
    return result


print(cumsum([1, 2, 3]))


def middle(t):
    return t[1:-1]


print(middle([1, 2, 3]))


def chop(t):
    del t[0]
    del t[-1]
    return None


t = [1, 2, 3, 4]
chop(t)
print(t)


def is_sorted(li):
    return li == sorted(li)


print(is_sorted(['b', 'a']))


def make_word_list(fileName):
    fin = open(fileName)
    li = []
    for line in fin:
        word = line.strip()
        li.append(word)
    return li


def in_bisec(word_list, word):
    if len(word_list) == 0:
        return False

    i = len(word_list)//2
    if word_list[i] == word:
        return True

    if word < word_list[i]:
        return in_bisec(word_list[:i], word)
    else:
        return in_bisec(word_list[i+1:], word)


# word_list = make_word_list('/Users/apple/data/algorithm018/week06/words.txt')

# search_list = ['alien', 'uidflsfasd', 'ornithology']

# for word in search_list:
#     print('is {}in the list?{}'.format(word, in_bisec(word_list, word)))


def reverse(li):
    result = []
    for word in li:
        inverse = word[::-1]
        if word < inverse and word != inverse and in_bisec(li, inverse):
            pair = (word, inverse)
            result.append(pair)
    return result


# word_list = make_word_list('/Users/apple/data/algorithm018/week06/words.txt')
# print(reverse(word_list))


def check_sum(l, k):
    for i in range(len(l)-1):
        print(i)
        for j in range(i+1, len(l)):
            if l[i]+l[j] == k:
                return True
    return False


print(check_sum([1, 5, 11, 5], 22))


def largest_mul(l):
    res = l[0]*l[1]*l[2]
    for i in range(len(l)-2):
        for j in range(i+1, len(l)-1):
            for k in range(j+1, len(l)):
                mul = l[i]*l[j]*l[k]
                if mul > res:
                    res = mul
    return res


print(largest_mul([-10, -20, -20, -1]))


def largest_product_of_three(nums):
    max_val = nums[1]
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                max_val = max(nums[i] * nums[j] * nums[k], max_val)
    return max_val


print(largest_product_of_three([-10, -20, -20, -1]))


def medina(l):
    l.sort()
    n = len(l)
    m = n//2
    if n % 2 == 0:
        return (l[m]+l[m-1])/2
    else:
        return l[m]


print(medina([2, 3, 4, 5, 6, 7]))


def isInchreasing(l):
    for n in range(len(l)-1):
        if l[n] < l[n+1]:
            continue
        else:
            return False
    return True
    # return l == sorted(l)


print(isInchreasing([1, 2, 10, 4, 5]))


def mul(l):
    res = 1
    for i in l:
        res *= i
    return res


print(mul([2, 2, 3]))


def longer_than(s, n):
    dummy = []
    words = s.split()
    for w in words:
        if len(w) > n:
            # dummy.append(w)
            dummy += [w]
    return dummy


print(longer_than('It has the same Function', 3))
print(string.punctuation)


def permutations(l):
    res = []
    if len(l) == 0:
        return []
    if len(l) == 1:
        return [l]
    else:
        for i in range(len(l)):
            le = permutations(l[:i]+l[i+1:])
            for n in le:
                res += [[l[i]] + n]
        return res


print(permutations([1, 2, 3]))

print([1, 2, 3].sort() == None)  # True
# print(gcd(15, 12))
# print(math.gcd(15, 12))

m = [9, 8, 7, 6]
for i in range(len(m)-1, -1, -1):
    print(m[i])


def reverse(li):
    result = []
    for word in li:
        inverse = word[::-1]
        if word < inverse and word != inverse and in_bisec(li, inverse):
            pair = (word, inverse)
            result.append(pair)
    return result


# word_list = make_word_list('/Users/apple/data/algorithm018/week06/words.txt')
# print(reverse(word_list))


def reduceFraction(num, den):
    def gcd(num1, num2):
        if num1 % num2 == 0:
            return num2
        return gcd(num2, num1 % num2)
    gcdNum = gcd(num, den)
    return (num/gcdNum, den/gcdNum)
