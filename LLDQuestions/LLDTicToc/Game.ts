import { Board } from "./Board";
import Player from "./Player";

export class Game {
    private board: Board;
    private players: Player[];
    private currentPlayerIndex: number;

    constructor(playerList: Player[], boardSize: number = 3) {
        this.board = new Board(boardSize);
        this.players = playerList;
        this.currentPlayerIndex = 0;
    }

    public start(row: number, col: number): void {
        let winner: Player | null = null;
        while (!this.board.isFull() && !winner) {
            this.board.displayBoard();
            const currentPlayer = this.players[this.currentPlayerIndex];
            console.log(`Player ${currentPlayer.getName()}'s turn` , row, col);
            const move = currentPlayer.makeMove(this.board, row, col);
            if (move) {
                if (this.board.checkWin(currentPlayer.getSymbol())) {
                    winner = currentPlayer;
                } else {
                    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
                    return
                }
            } else {
                console.log('Invalid move, try again.');
                return
            }
        }
        this.board.displayBoard();
        if (winner !== null) {
            console.log(`Player ${winner} wins!`);
            return
        } else {
            console.log('The game is a draw.');
            return
        }
    }
}