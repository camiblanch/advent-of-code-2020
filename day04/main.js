const readFile = (file = "input.txt") => {
	const fs = require("fs");
	return fs.readFileSync(file).toString().split("\n");
};

const part1 = () => {

};

part1();