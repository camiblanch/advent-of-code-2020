const readFile = (file = "input.txt") => {
	const fs = require("fs");
	return fs.readFileSync(file).toString().split("\n").map(pass => pass.split(""));
};

const rowsOnPlane = 128;
const columnsOnPlane = 8;

class Seat {
	constructor(row, column) {
		this.row = row;
		this.column = column;
		this.seatID = row * 8 + column;
	}
}

const binarySplit = (list, min, max, lowerHalfIndicator, upperHalfIndicator) => {
	if (list.length === 1) {
		return list[0] === lowerHalfIndicator ? min : max;
	}
	switch (list[0]) {
		case lowerHalfIndicator:
			return binarySplit(
				list.slice(1),
				min,
				min + Math.floor((max - min) / 2),
				lowerHalfIndicator,
				upperHalfIndicator,
			);
		case upperHalfIndicator:
			return binarySplit(
				list.slice(1),
				max - Math.floor((max - min) / 2),
				max,
				lowerHalfIndicator,
				upperHalfIndicator,
			);
		default:
			console.log("OOPS!");
	}
};

const part1 = () => {
	const boardingPasses = readFile();
	let highestID = 0;

	const results = boardingPasses.map(pass => {
		const row = binarySplit(pass.slice(0, 7), 0, rowsOnPlane - 1, "F", "B");
		const column = binarySplit(pass.slice(7), 0, columnsOnPlane - 1, "L", "R");

		const seat = new Seat(row, column);
		if (seat.seatID > highestID) {
			highestID = seat.seatID;
		}
		return seat;
	});

	console.log(highestID);
};

const part2 = () => {

};

part1();