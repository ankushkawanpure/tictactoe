/**
 * Created by ankush on 7/23/17.
 */

class ticAiUtil {

    win_combination =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];


    /**
     Regular minmax Recusrive min player function
     :param board: state of the game
     :return: 1 if winning
     0 if draw
     -1 if loss
     */
    minimax_return_min = (board) => {
        // 2 represent infinity
        let retmax = -2;

        // utility : win: 1  loss: -1   draw: 0
        let winner = this.check_win(board);

        if (winner !== 0) {
            return winner;
        } else if (this.check_draw(board)) {
            return 0;
        }

        // state_count = state_count + 1;

        for (let move = 0; move < 9; move++) {
            if (board[move] === false) {
                board[move] = 1;
                let val = this.minimax_return_max(board);
                board[move] = false;

                if (val > retmax) {
                    retmax = val
                }
            }
        }

        return retmax
    };

    /**
     * Regular minmax Recusrive Max player function
     * @param board: state of the game
     * return: 1 if winning
     * 0 if draw
     * -1 if loss
     */
    minimax_return_max = (board) => {

        let retmin = 2;

        // utility : win: 1  loss: -1   draw: 0
        let winner = this.check_win(board);

        if (winner !== 0) {
            return winner;
        } else if (this.check_draw(board)) {
            return 0;
        }

        for (let move = 0; move < 9; move++) {
            if (board[move] === false) {
                board[move] = -1;
                let val = this.minimax_return_min(board);
                board[move] = false;

                if (val < retmin) {
                    retmin = val
                }
            }
        }

        return retmin;
    }


    /**
     * Function to check draw ie. no moves left
     * @param board
     * return: true if game is draw
     */
    check_draw = (board) => {
        for (let i = 0; i < 9; i++) {
            if (board[i] === false) {
                return false;
            }
        }
        return true;
    }

    /**
     * function to check the game is ended
     @param board: game board
     @return: return the player is game ended
     */
    check_win = (board) => {

        for (let i = 0; i < this.win_combination.length; i++) {
            if (board[this.win_combination[i][0]] !== false &&
                board[this.win_combination[i][0]] === board[this.win_combination[i][1]] &&
                board[this.win_combination[i][1]] === board[this.win_combination[i][2]]) {
                return board[this.win_combination[i][2]];
            }
        }
        return 0;
    }


    /***
     * Minimax Helper function
     * @param board
     * return the move from the array
     */
    computer_move = (board) => {
        let retmax = -2;
        let my_moves = [];


        for (let move = 0; move < 9; move++) {
            if (board[move] === false) {
                board[move] = 1;
                let val = this.minimax_return_max(board);
                board[move] = false;

                if (val > retmax) {
                    retmax = val;
                    my_moves = [move]
                }

                if (val === retmax) {
                    my_moves.push(move);
                }
            }
        }

        // console.log("Tree Node Generated: " + state_count);
        return my_moves[0];
    }


    normalizeChar = (str) => {

        if (str === false) {
            return false;
        } else if (str === 1) {
            return "O";
        } else {
            return "X";
        }
    }


    denormalizeChar = (str) => {

        if (str === "O") {
            return 1;
        } else if (str === "X") {
            return -1;
        } else {
            return false
        }
    }


    normalizeBoard = (board) => {
        for (let i = 0; i < board.length; i++) {
            board[i] = this.normalizeChar(board[i])
        }
        console.log(board);
        return board;
    }


    denormalizeBoard = (board) => {
        for (let i = 0; i < board.length; i++) {
            board[i] = this.denormalizeChar(board[i])
        }
        console.log(board);
        return board;
    }

}
export default ticAiUtil;

