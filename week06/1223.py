import os

b = False




# ba = False
# if 1 == 1:
#     ba = True
# print(ba)

def missingComment(filename):
    f = open(filename)
    ar = []
    str1 = list(f.readlines())
    str1 = [x for x in str1 if x != '\n']
    print(str1)
    for i in range(len(str1)):
        if str1[i][:3] == 'def':
            s = str1[i-1]
            if s[0] == '#':
                continue
            else:
                n = str1[i].find('(')
                ar.append(str1[i][4:n])
    f.close()
    return ar

print(missingComment('/Users/apple/data/algorithm018/week06/code1.py'))
# Exercise 7


def missingComment(filename):
    f = open(filename)
    ar = []
    str1 = list(f.readlines())
    line_1 = [x for x in line_1 if x != '\n']
    for i in range(len(str1)):
        str1[i] = str1[i].strip('\n')
        if str1[i][:3] == 'def':
            s = str1[i-1]
            if s[0] == '#':
                continue
            else:
                n = str1[i].find('(')
                ar.append(str1[i][4:n])
    f.close()
    return ar


def gameOfLife(board):
    """
    Do not return anything, modify board in-place instead.
    """

    neighbors = [(1, 0), (1, -1), (0, -1), (-1, -1),
                 (-1, 0), (-1, 1), (0, 1), (1, 1)]

    rows = len(board)
    cols = len(board[0])

    copy_board = [[board[row][col]
                   for col in range(cols)] for row in range(rows)]
    l = []
    for i in board:
        l.append(list(i))
    for row in range(rows):
        for col in range(cols):

            neighbors_E = 0
            neighbors_X = 0
            neighbors_O = 0
            for neighbor in neighbors:

                r = (row + neighbor[0])
                c = (col + neighbor[1])

                if (r < rows and r >= 0) and (c < cols and c >= 0):
                    if (copy_board[r][c] == '.'):
                        neighbors_E += 1
                    if (copy_board[r][c] == 'X'):
                        neighbors_X += 1
                    if (copy_board[r][c] == 'O'):
                        neighbors_O += 1
            print(neighbors_X)
            # 1 An empty cell becomes non-empty it is surrounded by at least two individuals of the same species.It remains empty if is a draw
            if copy_board[row][col] == '.':
                if neighbors_O == neighbors_X or (neighbors_O < 2 and neighbors_X < 2):
                    l[row][col] = '.'
                else:
                    if neighbors_O > neighbors_X:
                        l[row][col] = 'O'
                    if neighbors_X > neighbors_O:
                        l[row][col] = 'X'
            # 2 A non-empty cell becomes empty if it is surrounded by more than six non-empty cells, regardless of their species.
            if (copy_board[row][col] == 'X' or copy_board[row][col] == 'O') and (neighbors_O + neighbors_X > 6):
                l[row][col] = '.'
            # 3 A non-empty cell becomes empty if it is surrounded by less than three members of its species.
            if (copy_board[row][col] == 'X' and neighbors_X < 3) or (copy_board[row][col] == 'O' and neighbors_O < 3):
                l[row][col] = '.'
            # 4 A non-empty cell becomes empty if it is surrounded by more members of the opposite species than members of its species.
            if (copy_board[row][col] == 'X' and neighbors_O > neighbors_X) or (copy_board[row][col] == 'O' and neighbors_X > neighbors_O):
                l[row][col] = '.'

            # if copy_board[row][col] == 0 and live_neighbors == 3:
            #     board[row][col] = 1
    c = []
    for j in l:
        c.append(''.join(j))
    return c


print(gameOfLife(["XX......", "XX....O.", ".....OOO"]))




word = 'Computer!'
pun = ['!','.',')']

if word[-1] in pun:
    print(123123)
