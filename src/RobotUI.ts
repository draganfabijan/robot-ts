import * as readline from 'readline';
import { Robot } from './Robot';
import { CommandParser, Command } from './CommandParser';
import { Board } from './Board';

export class RobotUI {
  private rl: readline.Interface;
  private robot: Robot;
  private parser: CommandParser;
  private board: Board;
  isRobotPlaced: boolean = false;

  constructor(rl: readline.Interface, robot: Robot, parser: CommandParser, board: Board) {
    this.rl = rl;
    this.robot = robot;
    this.parser = parser;
    this.board = board;

    this.rl.on('line', (input: string) => this.handleCommand(input));
  }

  handleCommand(input: string) {
    if (!this.isRobotPlaced && !input.startsWith('PLACE')) {
      console.log('You must place the robot first.');
      return;
    }

    if (input.startsWith('PLACE')) {
      this.handlePlace(input);
    } else if (input.startsWith('HOLE')) {
      this.handleHole(input);
    } else if (input === 'MOVE') {
      this.robot.move();
    } else if (input === 'LEFT') {
      this.robot.turnLeft();
    } else if (input === 'RIGHT') {
      this.robot.turnRight();
    } else if (input === 'REVERSE') {
      this.robot.reverse();
    } else if (input === 'REPORT') {
      this.robot.report();
    } else {
      console.log('Invalid command.');
    }
  }

  private handlePlace(input: string) {
    const command: Command | undefined = this.parser.parsePlace(input);
    if (command?.position && !this.board.hasHoleAt(command.position.x, command.position.y)) {
      this.robot.position = command.position;
      this.isRobotPlaced = true;
    }
  }

  private handleHole(input: string) {
    const command: Command | undefined = this.parser.parseHole(input);
    if (command?.holePosition) {
      if (this.board.hasHoleAt(command.holePosition.x, command.holePosition.y)) {
        console.log('A hole already exists at the specified position.');
        return;
      }
      if (command.holePosition.x === this.robot.position.x && command.holePosition.y === this.robot.position.y) {
        console.log('You cannot place a hole where the robot is.');
        return;
      }
      this.board.addHole(command.holePosition.x, command.holePosition.y);
    }
  }
}
