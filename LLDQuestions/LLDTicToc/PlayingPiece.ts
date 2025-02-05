export enum PlayingPiece {
    'X' = 'X',
    'O' = 'O',
    '$' = '$',
    '#' = '#',
    '@' = '@'
}

export class PlayingPieceType {
    peiceType: PlayingPiece
    constructor(peiceType: PlayingPiece) {
        this.peiceType = peiceType;
    }
}