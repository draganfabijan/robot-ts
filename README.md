# Robot on Board

This project simulates a robot moving on a board. The robot can be positioned on the board, moved in different directions, and report its current position. Additionally, there is an option to add holes on the board.

## Installation

- Clone the repository.
- Run `npm install` to install the required dependencies.

## Usage

To start the robot program, run the following command:

```shell
npm start
```

Once the robot program is started, you can interact with it using the following commands:

- `PLACE x, y, direction`: Positions the robot on the board at the specified coordinates and facing the given direction.
- `HOLE x, y`: Adds a hole on the board at the specified coordinates. The robot cannot move into a hole, and attempting to place a hole on the robot's current position is not allowed.
- `MOVE`: Moves the robot one step forward in the direction it is currently facing.
- `LEFT`: Rotates the robot 90 degrees to the left.
- `RIGHT`: Rotates the robot 90 degrees to the right.
- `REPORT`: Outputs the current position and direction of the robot.

To exit the robot program, press `Ctrl + C` or terminate the process.

## Example Usage

Here is an example of how to interact with the robot:

```
> npm start
Robot program started. Use commands to control the robot.

> PLACE 0, 0, NORTH
> MOVE
> REPORT
Output: 0, 1, NORTH

> RIGHT
> MOVE
> REPORT
Output: 1, 1, EAST

> HOLE 1, 1
Output: Adding a hole on a placed robot is not allowed.

> LEFT
> MOVE
> REPORT
Output: 1, 1, NORTH
```

## Testing

To run the test suite, run the following command:

```shell
npm test
```


