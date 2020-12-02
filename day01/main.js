const readFile = (file = "input.txt") => {
	const fs = require("fs");
	return fs.readFileSync(file).toString().split("\n").map(Number);
};

const entries = readFile();

loop1:
	for (let i = 0; i < entries.length; i++) {
		for (let j = i + 1; j < entries.length; j++) {
			if (entries[i] + entries[j] === 2020) {
				console.log(entries[i] * entries[j]);
				break loop1;
			}
		}
	}