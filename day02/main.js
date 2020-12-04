const readFile = (file = "input.txt") => {
	const fs = require("fs");
	return fs.readFileSync(file).toString().split("\n");
};

const passwordEntries = readFile();

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