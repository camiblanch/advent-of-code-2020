const readFile = (file = "input.txt") => {
	const fs = require("fs");
	return fs.readFileSync(file).toString().split("\n");
};

const part1 = () => {
	const map = readFile().map(row => row.split(""));


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
		col += 3;
		while (col >= rowLength) {
			col = col - rowLength;
		}
		// move down
		row++;
	}

	console.log(treeCount);
};

part1();