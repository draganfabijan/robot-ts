import * as readline from 'readline';
import { Robot } from './Robot';
import { CommandParser, Command } from './CommandParser';

export class RobotUI {
  private rl: readline.Interface;
  private robot: Robot;
  private parser: CommandParser;

  constructor(rl: readline.Interface, robot: Robot, parser: CommandParser) {
    this.rl = rl;
    this.robot = robot;
    this.parser = parser;

    this.rl.on('line', (input: string) => this.handleCommand(input));
  }

  handleCommand(input: string) {
    if (input.startsWith('PLACE')) {
      this.handlePlace(input);
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
    if (command?.position) {
      this.robot.position = command.position;
    }
  }
}