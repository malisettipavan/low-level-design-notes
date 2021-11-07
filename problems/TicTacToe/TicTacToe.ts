const inquirer = require('inquirer');

// Question class
class Question {
    type: string;
    name: string;
    message: string;

    constructor(type: string, name: string, message: string) {
        this.type = type;
        this.name = name;
        this.message = message;
    }

    toObject() : Object {
        return {
            type : this.type,
            name : this.name,
            message : this.message
        };
    }
}


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
    i: number;
    j: number;

    constructor(i: number, j: number) {
        this.i = i;
        this.j = j;
    }
}


// BOARD
// interface BoardIC {

//     display(): void;

//     isValid(move: Move): boolean;

//     make(move: Move, symbol: string): void;

//     isCurrPlayerWinner(symbol: string): boolean;

//     isTerminated(): boolean;

// }

interface Board {
    display() : void;
    isValid(move : Move) : boolean;
    make(move : Move, symbol : string) : void;
    isCurrPlayerWinner(symbol : string) : boolean;
    isTerminated() : boolean;
}

class SimpleBoard implements Board {

    private rows: number;
    private columns: number;

    private board: string[][];

    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;
        this.board = new Array(rows);

        for (let i = 0; i < rows; i++) {
            this.board[i] = new Array(columns).fill(null);
        }
    }

    display() {
        // Print the board
        for (let i = 0; i < this.rows; i++) {
            console.log(this.board[i]);
        }
    }

    isValid(move: Move) {
        // check whether board[i][j] is empty or not
        if (move.i < 0 || move.j < 0 || move.i >= this.rows || move.j >= this.columns) return false;
    
        if (this.board[move.i][move.j] !== null) return false;
         
        return true;
    }

    make(move: Move, symbol: string) {
        // change board[i][j] to the symbol
        this.board[move.i][move.j] = symbol;
    }

    isCurrPlayerWinner(symbol: string) {
        // check if there is a horizontal/vertical/diagonal sequence with current player's symbol

        // Checking horizontally
        for (let i = 0; i < this.rows; i++) {
            let flag: boolean = true;
            for (let j = 0; j < this.columns; j++) {
                if (this.board[i][j] !== symbol) {
                    flag = false;
                    break;
                }
            }
            if (flag) return true;
        }

        // checking vertically
        for (let j = 0; j < this.columns; j++) {
            let flag: boolean = true;
            for (let i = 0; i < this.rows; i++) {
                if (this.board[i][j] !== symbol) {
                    flag = false;
                    break;
                }
            }

            if (flag) return true;
        }

        // checking diagonally
        let leftDiagFlag: boolean = true;
        for (let i = 0; i < this.rows; i++) {
            if (this.board[i][i] !== symbol) {
                leftDiagFlag = false;
                break;
            }
        }

        if (leftDiagFlag) return true;

        let rightDiagFlag: boolean = true;
        for (let i = 0; i < this.rows; i++) {
            if (this.board[this.rows - i - 1][i] !== symbol) {
                rightDiagFlag = false;
                break;
            }
        }

        if (rightDiagFlag) return true;

        return false;
    }

    isTerminated() {
        // if the board is Full
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                if (this.board[i][j] === null) return false;
            }
        }

        return true;
    }

}


// PLAYER
class Player {
    name: string;
    symbol: string;

    constructor(name: string, symbol: string) {
        this.name = name;
        this.symbol = symbol;
    }
}




// TIC-TAC TOE
interface Game{
    nextTurn(curr_player : Player) : Player;
    start() : Promise<string>;
}

class TicTacToe implements Game {

    player1: Player;
    player2: Player;

    board: Board;

    constructor(player1: Player, player2: Player, board: Board) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = board;
    }

    nextTurn(curr_player: Player) {
        if (curr_player == this.player1) return this.player2;
        return this.player1;
    }

    async start() : Promise<string> {

        let currPlayer: Player = this.player1;
        while (!this.board.isTerminated()) {
            // Display the board
            this.board.display();

            // Ask User for next Move
            console.log('Please enter co-ordinates for your next move');
            const xCoord = new Question('input', 'xcoord', 'Please enter row Number');
            const yCoord = new Question('input', 'ycoord', 'Please enter column Number');

            const x = await inquirer.prompt(xCoord.toObject());
            const y = await inquirer.prompt(yCoord.toObject());

            let currPlayerMove: Move = new Move(x.xcoord,y.ycoord);

            // Check if the Move is Valid
            if (!this.board.isValid(currPlayerMove)) {
                // say "Invalid Move"
                console.log('Invalid Move');

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

async function main() {

    const question1: Question = new Question('input', 'player1', 'What is the name of player1 ?');
    const question2: Question = new Question('input', 'player2', 'What is the name of player2 ?');

    const player1Name = await inquirer.prompt(question1.toObject());
    const player2Name = await inquirer.prompt(question2.toObject());

    // create Two players
    const player1 : Player = new Player(player1Name.player1, 'X');
    const player2 : Player = new Player(player2Name.player2, 'O');

    // create a new Board
    const board : Board = new SimpleBoard(3, 3);

    // Start the Game
    const ticTacToeGame: Game = new TicTacToe(player1, player2, board);
    let result: string = await ticTacToeGame.start();

    console.log(result);
}

main();
