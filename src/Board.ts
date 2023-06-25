export type Position = { x: number, y: number };

export class Board {
  static readonly BOARD_SIZE = 5;
  holes: Position[] = [];

  constructor(initialHoles: Position[] = []) {
    this.holes = initialHoles;
  }

  addHole(x: number, y: number) {
    if (this.isOutOfBounds(x, y)) {
      console.log("Can't add a hole out of the board");
    } else {
      this.holes.push({ x, y });
    }
  }

  hasHoleAt(x: number, y: number): boolean {
    return this.holes.some(hole => hole.x === x && hole.y === y) || this.isOutOfBounds(x, y);
  }

  private isOutOfBounds(x: number, y: number): boolean {
    return x < 0 || x >= Board.BOARD_SIZE || y < 0 || y >= Board.BOARD_SIZE;
  }
}
