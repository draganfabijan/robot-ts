import { Robot, RobotPosition, Direction } from '../src/Robot';
import { Board } from '../src/Board';

describe('Robot', () => {
  let board: Board;
  let robot: Robot;

  beforeEach(() => {
    board = new Board();
    robot = new Robot({ x: 0, y: 0, direction: 'NORTH' }, board);
  });

  describe('move', () => {
    it('should move robot to the north', () => {
      robot.move();
      expect(robot.position).toEqual({ x: 0, y: 1, direction: 'NORTH' });
    });

    it('should not move robot into a hole', () => {
      board.addHole(0, 1);
      robot.move();
      expect(robot.position).toEqual({ x: 0, y: 0, direction: 'NORTH' });
    });
  });

  describe('turnLeft', () => {
    it('should turn robot to the west', () => {
      robot.turnLeft();
      expect(robot.position.direction).toBe('WEST');
    });
  });

  describe('turnRight', () => {
    it('should turn robot to the east', () => {
      robot.turnRight();
      expect(robot.position.direction).toBe('EAST');
    });
  });

  describe('reverse', () => {
    it('should reverse robot direction', () => {
      robot.reverse();
      expect(robot.position.direction).toBe('SOUTH');
    });
  });
});
