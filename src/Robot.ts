import { Board } from './Board';
export type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

export interface RobotPosition {
  x: number;
  y: number;
  direction: Direction;
}

export class Robot {
  position: RobotPosition;
  board: Board;

  constructor(position: RobotPosition, board: Board) {
    this.position = position;
    this.board = board;
  }

  move() {
    let newPosition: RobotPosition = { ...this.position };

    switch (newPosition.direction) {
      case 'NORTH':
        newPosition.y += 1;
        break;
      case 'SOUTH':
        newPosition.y -= 1;
        break;
      case 'EAST':
        newPosition.x += 1;
        break;
      case 'WEST':
        newPosition.x -= 1;
        break;
    }

    if (!this.board.hasHoleAt(newPosition.x, newPosition.y)) {
      this.position = newPosition;
    }
  }

  turnLeft(): void {
    switch (this.position.direction) {
      case 'NORTH':
        this.position.direction = 'WEST';
        break;
      case 'WEST':
        this.position.direction = 'SOUTH';
        break;
      case 'SOUTH':
        this.position.direction = 'EAST';
        break;
      case 'EAST':
        this.position.direction = 'NORTH';
        break;
    }
  }

  turnRight(): void {
    switch (this.position.direction) {
      case 'NORTH':
        this.position.direction = 'EAST';
        break;
      case 'EAST':
        this.position.direction = 'SOUTH';
        break;
      case 'SOUTH':
        this.position.direction = 'WEST';
        break;
      case 'WEST':
        this.position.direction = 'NORTH';
        break;
    }
  }

  reverse(): void {
    this.turnLeft();
    this.turnLeft();
  }

  report(): void {
    console.log(`${this.position.x},${this.position.y},${this.position.direction}`);
  }
}
