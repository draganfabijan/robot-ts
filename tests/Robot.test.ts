import { Robot, RobotPosition, Direction } from '../src/Robot';

describe('Robot', () => {
  let robot: Robot;
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    const initialPosition: RobotPosition = {
      x: 0,
      y: 0,
      direction: 'NORTH',
    };
    robot = new Robot(initialPosition);
  });

  afterEach(() => {
    if (consoleLogSpy) {
      consoleLogSpy.mockRestore();
    }
  });

  it('should move north', () => {
    robot.move();
    expect(robot.position).toEqual({ x: 0, y: 1, direction: 'NORTH' });
  });

  it('should turn left from NORTH to WEST', () => {
    robot.turnLeft();
    expect(robot.position.direction).toBe('WEST');
  });

  it('should turn right from NORTH to EAST', () => {
    robot.turnRight();
    expect(robot.position.direction).toBe('EAST');
  });

  it('should reverse direction from NORTH to SOUTH', () => {
    robot.reverse();
    expect(robot.position.direction).toBe('SOUTH');
  });

  it('should log the position correctly', () => {
    consoleLogSpy = jest.spyOn(console, 'log');
    robot.report();
    expect(consoleLogSpy).toHaveBeenCalledWith('0,0,NORTH');
  });

});

