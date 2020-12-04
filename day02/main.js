const readFile = (file = "input.txt") => {
	const fs = require("fs");
	return fs.readFileSync(file).toString().split("\n");
};

const passwordEntries = readFile();

const part1 = () => {
	const validPasswords = passwordEntries.filter(passwordEntry => {
		const [passwordRule, password] = passwordEntry.split(": ");
		const [characterRange, character] = passwordRule.split(" ");
		const [min, max] = characterRange.split("-").map(Number);
		const numTimesCharOccurs = password.split("").filter(passwordCharacter => (passwordCharacter === character)).length;

		if (numTimesCharOccurs >= min && numTimesCharOccurs <= max) {
			return true;
		}
	});

	console.log(validPasswords.length);
};

const part2 = () => {
	const validPasswords = passwordEntries.filter(passwordEntry => {
		const [passwordRule, password] = passwordEntry.split(": ");
		const [characterRange, character] = passwordRule.split(" ");
		const [position1, position2] = characterRange.split("-").map(Number);
		const passwordAsArray = password.split("");
		const position1Char = passwordAsArray[position1 - 1];
		const position2Char = passwordAsArray[position2 - 1];

		if ((position1Char === character && position2Char !== character)
			|| (position1Char !== character && position2Char === character)) {
			return true;
		}
	});

	console.log(validPasswords.length);
};

part2();