export type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

export interface RobotPosition {
  x: number;
  y: number;
  direction: Direction;
}

export class Robot {
  position: RobotPosition;

  constructor(position: RobotPosition) {
    this.position = position;
  }

  // Add additional check to see robot position and now allow to move outside of the board
  // Also, add additional check to see if it is a hole
  move() {
    switch (this.position.direction) {
      case 'NORTH':
        this.position.y += 1;
        break;
      case 'SOUTH':
        this.position.y -= 1;
        break;
      case 'EAST':
        this.position.x += 1;
        break;
      case 'WEST':
        this.position.x -= 1;
        break;
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
