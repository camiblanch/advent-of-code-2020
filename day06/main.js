const readFile = (file = "input.txt") => {
	const fs = require("fs");
	return fs.readFileSync(file).toString().split("\n\n");
};

const part1 = () => {

};
const part2 = () => {

};

part1();