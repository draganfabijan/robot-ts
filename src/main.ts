import { RobotUI } from './RobotUI';
import * as readline from 'readline';
import { Robot } from './Robot';
import { CommandParser } from './CommandParser';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let robot = new Robot({ x: 0, y: 0, direction: 'NORTH' });
let parser = new CommandParser();

let robotUI = new RobotUI(rl, robot, parser);