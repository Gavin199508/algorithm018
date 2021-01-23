def knight(start, end, moves):
    ar = []
    startRow = int(start[1]) - 1
    endRow = int(end[1]) - 1
    startCol = abs(ord('a') - ord(start[0]))
    endCol = abs(ord('a') - ord(end[0]))

    def dfs(row, col, times):
        if row > endRow or col > endCol or times > moves:
            return
        if row == endRow and col == endCol and times <= moves:
            ar.append(True)
            return
        dfs(row+2, col + 1, times + 1)
        row = startRow
        col = startCol
        dfs(row + 1, col + 2, times + 1)

    dfs(startRow, startCol, 0)

    if len(ar) > 0:
        return True
    else:
        return False


print(knight("a1", "c5", 2))
