const readFile = (file = "input.txt") => {
	const fs = require("fs");
	return fs.readFileSync(file).toString().split("\n");
};

const part1 = () => {
	const map = readFile().map(row => row.split(""));
	const treeCount = getTreeCount(map, 3, 1);
	console.log(treeCount);
};

function getTreeCount(map, rightSlope, downSlope) {
	const rowLength = map[0].length;
	let treeCount = 0;
	let col = 0;
	let row = 0;

	while (row < map.length) {
		// check for tree
		if (map[row][col] === "#") {
			treeCount++;
		}
		// move right, if out of bounds, loop around
		col += rightSlope;
		while (col >= rowLength) {
			col = col - rowLength;
		}
		// move down
		row += downSlope;
	}
	return treeCount;
}

const part2 = () => {
	const map = readFile().map(row => row.split(""));
	let treeCount0 = getTreeCount(map, 1, 1);
	let treeCount1 = getTreeCount(map, 3, 1);
	let treeCount2 = getTreeCount(map, 5, 1);
	let treeCount3 = getTreeCount(map, 7, 1);
	let treeCount4 = getTreeCount(map, 1, 2);

	console.log(treeCount0, treeCount1, treeCount2, treeCount3, treeCount4);
	console.log(treeCount0 * treeCount1 * treeCount2 * treeCount3 * treeCount4);
};

part2();