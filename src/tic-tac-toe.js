class TicTacToe {
    constructor() {
        this.field = [[null,null,null],[null,null,null],[null,null,null]];
        this.xo = 'x';
        this.stepan = 0;
        this.status = true;
        this.win = null;
        this.empty = true;
        this.stepan2 = 0;
        this.draw = false;
    }

    getCurrentPlayerSymbol() {
        return this.xo;
    }

    nextTurn(rowIndex, columnIndex) {
        this.empty = true;
        if (this.status == false){
            this.field = [[null, null, null],[null, null, null],[null, null, null]];
            this.xo = 'x';
            this.stepan = 0;
            this.status = true;
            this.win = null;
            this.draw = false;
        } else {
            if (this.field[rowIndex][columnIndex] == null){
                this.field[rowIndex][columnIndex] = this.xo;
                this.stepan++;
            } else {
                this.empty = false;
            }
        }
        if (this.field[0][0] != null && this.field[0][0] == this.field[1][0] && this.field[0][0] == this.field[2][0]){
            this.win = this.xo;
            this.status = false;
        }else
        if (this.field[0][1] != null && this.field[0][1] == this.field[1][1] && this.field[0][1] == this.field[2][1]){
            this.win = this.xo;
            this.status = false;
        }else
        if (this.field[0][2] != null && this.field[0][2] == this.field[1][2] && this.field[0][2] == this.field[2][2]){
            this.win = this.xo;
            this.status = false;
        }else
        if (this.field[0][0] != null && this.field[0][0] == this.field[0][1] && this.field[0][0] == this.field[0][2]){
            this.win = this.xo;
            this.status = false;
        }else
        if (this.field[1][0] != null && this.field[1][0] == this.field[1][1] && this.field[1][0] == this.field[1][2]){
            this.win = this.xo;
            this.status = false;
        }else
        if (this.field[2][0] != null && this.field[2][0] == this.field[2][1] && this.field[2][2] == this.field[2][0]){
            this.win = this.xo;
            this.status = false;
        }else
        if (this.field[0][0] != null && this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2]){
            this.win = this.xo;
            this.status = false;
        }else
        if (this.field[0][2] != null && this.field[0][2] == this.field[1][1] && this.field[0][2] == this.field[2][0]){
            this.win = this.xo;
            this.status = false;
        }else
            if (this.stepan == 9){
                this.draw = true;
                this.status = false;
                this.win = null; 
        }
        if (this.empty){
            {
                if (this.xo == 'x'){
                    this.xo = 'o';
                } else {
                    this.xo = 'x';
                }
            }
        }
    }

    isFinished() {
        return !this.status;
    }

    getWinner() {
        return this.win;
    }

    noMoreTurns() {
        for (var i = 0; i <= 2; i++)
            for (var j = 0; j <= 2; j++){
                if (this.field[i][j] == null){
                    return false;
                }
            }
            return true;
    }

    isDraw() {
        return this.draw;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
