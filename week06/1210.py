def make_dic(filename):
    fin = open(filename)
    d = dict()
    for line in fin:
        word = line.strip()
        d[word] = ''
    return d


def isWordInDict(word, d):
    return word in d


d = make_dic('/Users/apple/data/algorithm018/week06/words.txt')
print(isWordInDict('acre', d))


def ack(m, n):
    if m == 0:
        return n+1
    elif m > n and n == 0:
        return ack(m-1, 1)
    elif m > 0 and n > 0:
        return ack(m-1, ack(m, n-1))


cache1 = dict()


def ack_meno(m, n):
    if m == 0:
        return n+1
    if(m, n) in cache1:
        return cache1[(m, n)]
    elif m > 0 and n == 0:
        cache1[(m, n)] = ack_meno(m-1, 1)
    elif m > 0 and n > 0:
        cache1[(m, n)] = ack_meno(m-1, ack_meno(m, n-1))
    return cache1[(m, n)]


print(ack(3, 4), ack_meno(3, 4))
print(ack(3, 6), ack_meno(3, 6))

# print(cache1)


def has_duplicates(li):
    if len(li) <= 1:
        return False

    sli = sorted(li)
    for i in range(len(li)-1):
        if sli[i] == sli[i+1]:
            return True
    return False


def has_duplicates(li):
    d = dict()
    for elem in li:
        if elem in d:
            return True
        else:
            d[elem] = ''
    return False


li = ['asdfas', 123123, 123123, 'gdsgdfg', 'qweqweqw']

print(has_duplicates(li))
print(has_duplicates([1, 2, 3, 4, 5, 6, 7, 8, 9]))


def read_file(filename):
    f = open(filename)
    return f.read()


def letter_freq(text):
    d = dict()
    for x in text:
        if x.isalpha():
            d[x] = d.get(x, 0)+1
    return d


text = read_file('/Users/apple/data/algorithm018/week06/alice.txt')


def sort_letters(freq):
    li = []
    for k, v in freq.items():
        li.append((v, k))
    li.sort(reverse=True)
    print(li)
    res = []
    for v, k in li:
        res.append(k)
    return res


freq = letter_freq(text)
print(sort_letters(freq))

cas = [(1, 2), (3, 4)]

ar = ["XX......", "XX....O.", ".....OOO"]
l = []
for i in ar:
    i= list(i)
    l.append(i)

c =[]
for j in l:
    j = ''.join(j)
    c.append(j)
print(c)


def missingComment(filename):
    f = open(filename)
    ar = []
    #convert file to list
    str1 = list(f.readlines())
    #get rid of spaces in list
    str1 = [x for x in str1 if x != '\n']
    for i in range(len(str1)):
        #recognize def
        if str1[i][:3] == 'def':
            s = str1[i-1]
            #if previous line has #,continue
            if s[0] == '#':
                continue
            else:
                #append def name to list
                n = str1[i].find('(')
                ar.append(str1[i][4:n])
    f.close()
    return ar
