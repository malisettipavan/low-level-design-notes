"use strict";
// Tic-Tae Game
// 1) 2-player Game on 3*3 grid
// 2) Either player owns 'X' or 'O'
// 3) player with 'X' makes first move and both the players makes move alternatively
// 4) Winner - player to form a horizontal/vertical/diagonal sequence
// Requirements
// 1) Ask the User for the names of two players
// 2) print the grid after initialising
// 3) Allow the User to make moves on behalf of both the players
//    => User will make a move by entering the cell position
//    => Determine whether it is a valid move.
//    => If the move is invalid, ask User to re-enter cell position stating that it is a 'Invalid Move'
//    => If the move is Valid, put the symbol on board and print the board
// 4) Determine if a player is WON (or) if there are no valid Moves left.
// Move
class Move {
    constructor(i, j) {
        this.i = i;
        this.j = j;
    }
}
class Board {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.board = new Array(rows);
        for (let i = 0; i < rows; i++) {
            this.board[i] = new Array(columns);
        }
    }
    display() {
        // Print the board
    }
    isValid(move) {
        // check whether board[i][j] is empty or not
        return true;
    }
    make(move, symbol) {
        // change board[i][j] to the symbol
    }
    isCurrPlayerWinner(symbol) {
        // check if there is a horizontal/vertical/diagonal sequence with current player's symbol
        return false;
    }
    isTerminated() {
        // if the board is Full
        return false;
    }
}
class Player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }
}
class TicTacToe {
    constructor(player1, player2, board) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = board;
    }
    nextTurn(curr_player) {
        if (curr_player == this.player1)
            return this.player2;
        return this.player2;
    }
    start() {
        let currPlayer = this.player1;
        while (!this.board.isTerminated()) {
            // Display the board
            this.board.display();
            // Ask User for next Move
            let currPlayerMove = new Move(1, 2);
            // Check if the Move is Valid
            if (!this.board.isValid(currPlayerMove)) {
                // say "Invalid Move"
                // Ask the Move to currPlayer again
                continue;
            }
            // if valid, Make a Move
            this.board.make(currPlayerMove, currPlayer.symbol);
            // Check if currPlayer is winner
            if (this.board.isCurrPlayerWinner(currPlayer.symbol)) {
                return `${currPlayer.name} is the winner`;
            }
            // change Turn
            currPlayer = this.nextTurn(currPlayer);
        }
        return `Game is drawn`;
    }
}
function main() {
    // create Two players
    const player1 = new Player('Shiva', 'X');
    const player2 = new Player('Pavan', 'O');
    // create a new Board
    const board = new Board(3, 3);
    // Start the Game
    const ticTacToeGame = new TicTacToe(player1, player2, board);
    let result = ticTacToeGame.start();
    console.log(result);
}
// interface TestIC{
//     name : string;
//     getSymbol() : string;
//     changeSymbol() : void;
// }
// class Test implements TestIC{
//     name : string;
//     symbol : string;
//     constructor(name : string, symbol : string){
//         this.name = name;
//         this.symbol = symbol;
//     }
//     getSymbol(){
//         return this.symbol;
//     }
//     changeSymbol(){
//         this.symbol = 'Y';
//     }
// }
// const obj : TestIC  = new Test('pavan', 'X');
// obj.changeSymbol();
// console.log(obj.getSymbol());
