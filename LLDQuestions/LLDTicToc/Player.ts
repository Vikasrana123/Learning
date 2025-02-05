import { Board } from "./Board";
import { PlayingPiece, PlayingPieceType } from "./PlayingPiece";

/**
 * Represents a player in the Tic-Tac-Toe game.
 */
class Player {
    /**
     * The name of the player.
     */
    private name: string;

    /**
     * The symbol (X or O) used by the player.
     */
    private symbol: PlayingPiece;

    /**
     * Creates an instance of Player.
     * @param name - The name of the player.
     * @param symbol - The symbol used by the player.
     */
    constructor(name: string, symbol: PlayingPieceType) {
        this.name = name;
        this.symbol = symbol.peiceType;
    }

    /**
     * Gets the name of the player.
     * @returns The name of the player.
     */
    getName(): string {
        return this.name;
    }

    /**
     * Gets the symbol used by the player.
     * @returns The symbol used by the player.
     */
    getSymbol(): PlayingPiece {
        return this.symbol;
    }

    makeMove(board:Board, row:number, col:number) {
        return board.makeMove(row, col, this.symbol);
      }
}

export default Player;