import { PlayingPiece } from "./PlayingPiece";

export class Board {
    private board: string[][];
    private size: number;

    /**
     * Creates an instance of the Board class.
     * 
     * @param size - The size of the board. Defaults to 3 if not provided.
     * @remarks
     * Initializes a square board with the given size, filled with empty strings.
     */
    constructor(size: number = 3) {
        this.size = size;
        this.board = Array.from({ length: size }, () => Array(size).fill(''));
    }

    public displayBoard(): void {
        for (let row of this.board) {
            console.log(row.join(' | '));
        }
    }

    public makeMove(row: number, col: number, symbol: PlayingPiece): boolean {
        if (this.board[row][col] === '') {
            this.board[row][col] = symbol;
            return true;
        }
        return false;
    }

    public checkWin(symbol: PlayingPiece): boolean {
        // Check rows
        for (let row of this.board) {
            if (row.every(cell => cell === symbol)) {
                return true;
            }
        }

        // Check columns
        for (let col = 0; col < this.size; col++) {
            if (this.board.every(row => row[col] === symbol)) {
                return true;
            }
        }

        // Check diagonals
        if (this.board.every((row, idx) => row[idx] === symbol)) {
            return true;
        }
        if (this.board.every((row, idx) => row[this.size - 1 - idx] === symbol)) {
            return true;
        }

        return false;
    }

    public isFull(): boolean {
        return this.board.every(row => row.every(cell => cell !== ''));
    }

    public resetBoard(): void {
        this.board = Array.from({ length: this.size }, () => Array(this.size).fill(''));
    }
}