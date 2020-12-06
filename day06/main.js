const readFile = (file = "input.txt") => {
	const fs = require("fs");
	return fs.readFileSync(file).toString().split("\n\n").map(group=>group.split("\n"));
};

const part1 = () => {
	console.log(readFile());
};

const part2 = () => {

};

part1();