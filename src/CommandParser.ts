import { Direction, RobotPosition } from './Robot';

export interface Command {
  position?: RobotPosition;
}

export class CommandParser {
  parsePlace(input: string): Command {
    const command = input.trim().replace('PLACE ', '');
    const params = command.split(",").map(param => param.trim());
    const [x, y, direction] = params;

    const parsedX = parseInt(x);
    const parsedY = parseInt(y);

    if (isNaN(parsedX) || isNaN(parsedY)) {
      throw new Error('Invalid position. x and y must be integers.');
    }

    if (!['NORTH', 'SOUTH', 'EAST', 'WEST'].includes(direction)) {
      throw new Error('Invalid direction. Valid directions are NORTH, SOUTH, EAST, and WEST.');
    }

    return {
      position: { x: parsedX, y: parsedY, direction: direction as Direction },
    };
  }
}