import { RobotUI } from './RobotUI';
import * as readline from 'readline';
import { Robot, RobotPosition, Direction } from './Robot';
import { CommandParser } from './CommandParser';
import { Board, Position } from './Board';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define initial positions for the robot and the board
let initialRobotPosition: RobotPosition = { x: 0, y: 0, direction: 'NORTH' };
let initialBoardHoles: Position[] = [];

// Create instances of the board and the robot
let board = new Board(initialBoardHoles);
let robot = new Robot(initialRobotPosition, board);

let parser = new CommandParser();

let robotUI = new RobotUI(rl, robot, parser, board);
