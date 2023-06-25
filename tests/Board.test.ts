import { Board } from '../src/Board';

describe('Board', () => {
  let board: Board;

  beforeEach(() => {
    board = new Board();
  });

  test('addHole adds a hole to the board', () => {
    board.addHole(2, 2);
    expect(board.hasHoleAt(2, 2)).toBe(true);
  });

  test('addHole adds a hole to the board', () => {
    board.addHole(7, 7);
    expect(board.hasHoleAt(7, 7)).toBe(true);
  });

  test('hasHoleAt returns true for positions that are out of bounds', () => {
    expect(board.hasHoleAt(-1, 0)).toBe(true);
    expect(board.hasHoleAt(Board.BOARD_SIZE, 0)).toBe(true);
    expect(board.hasHoleAt(0, -1)).toBe(true);
    expect(board.hasHoleAt(0, Board.BOARD_SIZE)).toBe(true);
  });

  test('hasHoleAt returns false for positions that are on the board and do not have a hole', () => {
    expect(board.hasHoleAt(0, 0)).toBe(false);
    expect(board.hasHoleAt(2, 2)).toBe(false);
  });
});
