import { RobotUI } from '../src/RobotUI';
import * as readline from 'readline';
import { mock, instance, when, verify, anything } from 'ts-mockito';
import { Robot } from '../src/Robot';
import { CommandParser, Command } from '../src/CommandParser';

describe('RobotUI', () => {
  let mockReadline: readline.Interface;
  let mockRobot: Robot;
  let mockParser: CommandParser;
  let robotUI: RobotUI;

  beforeEach(() => {
    // Create mocks
    mockReadline = mock<readline.Interface>();
    mockRobot = mock<Robot>();
    mockParser = mock<CommandParser>();

    // Instantiate RobotUI with mock instances
    robotUI = new RobotUI(
      instance(mockReadline),
      instance(mockRobot),
      instance(mockParser)
    );
  });

  it('should handle MOVE command correctly', () => {
    robotUI.handleCommand('MOVE');

    // Verify that the move function was called on the Robot instance
    verify(mockRobot.move()).once();
  });

  it('should handle LEFT command correctly', () => {
    robotUI.handleCommand('LEFT');

    // Verify that the turnLeft function was called on the Robot instance
    verify(mockRobot.turnLeft()).once();
  });

  it('should handle RIGHT command correctly', () => {
    robotUI.handleCommand('RIGHT');

    // Verify that the turnRight function was called on the Robot instance
    verify(mockRobot.turnRight()).once();
  });

});
