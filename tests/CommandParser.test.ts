import { CommandParser } from '../src/CommandParser';

describe('CommandParser', () => {
  let parser: CommandParser;

  beforeEach(() => {
    parser = new CommandParser();
  });

  describe('parsePlace', () => {
    it('should parse valid PLACE command', () => {
      const input = 'PLACE 1,2,NORTH';
      const command = parser.parsePlace(input);
      expect(command.position).toEqual({ x: 1, y: 2, direction: 'NORTH' });
    });

    it('should throw error for invalid x position', () => {
      const input = 'PLACE abc,2,NORTH';
      expect(() => parser.parsePlace(input)).toThrow('Invalid position. x and y must be integers.');
    });

    it('should throw error for invalid y position', () => {
      const input = 'PLACE 1,def,NORTH';
      expect(() => parser.parsePlace(input)).toThrow('Invalid position. x and y must be integers.');
    });

    it('should throw error for invalid direction', () => {
      const input = 'PLACE 1,2,INVALID';
      expect(() => parser.parsePlace(input)).toThrow('Invalid direction. Valid directions are NORTH, SOUTH, EAST, and WEST.');
    });
  });

  describe('parseHole', () => {
    it('should parse valid HOLE command', () => {
      const input = 'HOLE 1,2';
      const command = parser.parseHole(input);
      expect(command.holePosition).toEqual({ x: 1, y: 2 });
    });

    it('should throw error for invalid x position', () => {
      const input = 'HOLE abc,2';
      expect(() => parser.parseHole(input)).toThrow('Invalid position. x and y must be integers.');
    });

    it('should throw error for invalid y position', () => {
      const input = 'HOLE 1,def';
      expect(() => parser.parseHole(input)).toThrow('Invalid position. x and y must be integers.');
    });
  });
});
