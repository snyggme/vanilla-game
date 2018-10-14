import Brick from './brick'

export function buildLevel(game, level) {
	let bricks = [];

	level.map((row, rowIndex) => {
		row.map((brick, brickIndex) => {
			let position = {
				x: 80 * brickIndex,
				y: 75 + 48 * rowIndex
			}

			if(brick === 1) {
				bricks.push(new Brick(game, position))
			}
		});
	});

	return bricks;
}

export const level1 = [
	// [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
	// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
];

export const level2 = [
	[0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];