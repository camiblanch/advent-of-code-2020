const readFile = (file = "input.txt") => {
	const fs = require("fs");
	return fs.readFileSync(file).toString().split("\n").map(Number);
};

const entries = readFile();

const part1 = () => {
	loop1:
		for (let i = 0; i < entries.length; i++) {
			for (let j = i + 1; j < entries.length; j++) {
				if (entries[i] + entries[j] === 2020) {
					console.log(entries[i] * entries[j]);
					break loop1;
				}
			}
		}
};

const part2 = () => {
	loop1:
		for (let i = 0; i < entries.length; i++) {
			for (let j = i + 1; j < entries.length; j++) {
				for (let k = j + 1; k < entries.length; k++) {
					const entryI = entries[i];
					const entryJ = entries[j];
					const entryK = entries[k];

					if (entryI + entryJ + entryK === 2020) {
						console.log(entryI * entryJ * entryK);
						break loop1;
					}
				}
			}
		}
};

part2();