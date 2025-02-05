import { Game } from "./Game";
import Player from "./Player";
import { PlayingPieceO } from "./PlayingPieceO";
import { PlayingPieceX } from "./PlayingPieceX";

const player1 = new Player("Alice", new PlayingPieceX());
const player2 = new Player("Bob", new PlayingPieceO());

const game = new Game([player1, player2]);

// Simulate some moves
game.start(0, 0); // Alice places X
game.start(1, 1); // Bob places O
game.start(0, 1); // Alice places X
game.start(2, 2); // Bob places O
game.start(0, 2); // Alice wins!
