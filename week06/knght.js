var gameOfLife = function (board) {
    if (!board.length) return

    let rows = board.length;
    let cols = board[0].length;

    // 新建并拷贝一份原数组
    let copy = new Array(rows);
    for (let row = 0; row < rows; row++) {
        copy[row] = new Array(cols);
    }

    // let copy = new Array(rows);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            copy[row][col] = board[row][col];
        }
    }
    // 遍历每一个格子(细胞)，统计每个格子周围的存活细胞个数
    // let neighbors = [0, -1, 1];
    let neighbors = [
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1]
    ]
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // 记录每个格子周围八个格子的存活情况
            let neighbors_O = 0,
                neighbors_X = 0
            // 遍历每个格子的周围的八个格子
            for (let i = 0; i < neighbors.length; i++) {
                let r = row + neighbors[i][0];
                let c = col + neighbors[i][1];
                if ((r >= 0 && r < rows) && (c >= 0 && c < cols)) {
                    if (board[r][c] == 'X') {
                        neighbors_X += 1
                    }
                    if (board[r][c] == 'O') {
                        neighbors_O += 1
                    }
                }
            }
            console.log(neighbors_X)
            //rules1
            if (board[row][col] == '.') {
                if ((neighbors_O == neighbors_X) || (neighbors_O < 2 && neighbors_X < 2)) {
                    copy[row][col] = '.'
                } else {
                    if (neighbors_O > neighbors_X) {
                        copy[row][col] = 'O'
                    } else if (neighbors_O < neighbors_X) {
                        copy[row][col] = 'X'
                    }
                }
            }
            //rules2
            if ((board[row][col] == 'X' || board[row][col] == 'O') && (neighbors_O + neighbors_X > 6)) {
                copy[row][col] = '.'
            }
            //rules3
            if ((board[row][col] == 'X' && neighbors_X < 3) || (board[row][col] == 'O' && neighbors_O < 3)) {
                copy[row][col] = '.'
            }
            //rules4
            if ((board[row][col] == 'X' && neighbors_O > neighbors_X) || (board[row][col] == 'O' && neighbors_X > neighbors_O)) {
                copy[row][col] = '.'
            }
        }
    }
    return copy.map(item=>item.join(''))
};

console.log(gameOfLife(["XX....", "XX....", "OOOOOO"]))