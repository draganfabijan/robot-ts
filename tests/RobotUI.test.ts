import { RobotUI } from '../src/RobotUI';
import { Robot } from '../src/Robot';
import { CommandParser } from '../src/CommandParser';
import { Board } from '../src/Board';
import * as readline from 'readline';

jest.mock('readline');
jest.mock('../src/Robot');
jest.mock('../src/CommandParser');
jest.mock('../src/Board');

describe('RobotUI', () => {
  let mockRl: jest.Mocked<readline.Interface>;
  let mockRobot: jest.Mocked<Robot>;
  let mockParser: jest.Mocked<CommandParser>;
  let mockBoard: jest.Mocked<Board>;
  let robotUI: RobotUI;

  beforeEach(() => {
    mockRl = { on: jest.fn(), close: jest.fn(), prompt: jest.fn(), setPrompt: jest.fn() } as any;
    mockParser = new CommandParser() as jest.Mocked<CommandParser>;
    mockBoard = new Board() as jest.Mocked<Board>;
    mockBoard = new Board() as jest.Mocked<Board>;
    mockRobot = new Robot({ x: 0, y: 0, direction: 'NORTH' }, mockBoard) as jest.Mocked<Robot>;

    robotUI = new RobotUI(mockRl, mockRobot, mockParser, mockBoard);
  });

  describe('handleCommand', () => {
    it('should prompt the user to place the robot first', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      robotUI.handleCommand('MOVE');
      expect(consoleSpy).toHaveBeenCalledWith('You must place the robot first.');
    });

    it('should handle valid PLACE command', () => {
      mockParser.parsePlace.mockReturnValueOnce({ position: { x: 1, y: 2, direction: 'NORTH' } });
      mockBoard.hasHoleAt.mockReturnValueOnce(false);
      robotUI.handleCommand('PLACE 1,2,NORTH');
      expect(mockRobot.position).toEqual({ x: 1, y: 2, direction: 'NORTH' });
    });

    it('should handle valid HOLE command', () => {
      mockParser.parseHole.mockReturnValueOnce({ holePosition: { x: 1, y: 2 } });
      robotUI.handleCommand('HOLE 1,2');
      expect(mockBoard.addHole).toHaveBeenCalledWith(1, 2);
    });

    it('should move robot on MOVE command', () => {
      robotUI.isRobotPlaced = true;
      robotUI.handleCommand('MOVE');
      expect(mockRobot.move).toHaveBeenCalled();
    });

    it('should turn robot left on LEFT command', () => {
      robotUI.isRobotPlaced = true;
      robotUI.handleCommand('LEFT');
      expect(mockRobot.turnLeft).toHaveBeenCalled();
    });

    it('should turn robot right on RIGHT command', () => {
      robotUI.isRobotPlaced = true;
      robotUI.handleCommand('RIGHT');
      expect(mockRobot.turnRight).toHaveBeenCalled();
    });

    it('should reverse robot on REVERSE command', () => {
      robotUI.isRobotPlaced = true;
      robotUI.handleCommand('REVERSE');
      expect(mockRobot.reverse).toHaveBeenCalled();
    });

    it('should report robot position on REPORT command', () => {
      robotUI.isRobotPlaced = true;
      robotUI.handleCommand('REPORT');
      expect(mockRobot.report).toHaveBeenCalled();
    });

    it('should log invalid command for invalid input', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      robotUI.isRobotPlaced = true;
      robotUI.handleCommand('INVALID');
      expect(consoleSpy).toHaveBeenCalledWith('Invalid command.');
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
