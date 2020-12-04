const readFile = (file = "input.txt") => {
	const fs = require("fs");
	return fs.readFileSync(file).toString().split("\n\n");
};

class Passport {
	constructor({byr, iyr, eyr, hgt, hcl, ecl, pid, cid = "North Pole"}) {
		this.birthYear = parseInt(byr);
		this.issueYear = parseInt(iyr);
		this.expirationYear = parseInt(eyr);
		this.height = hgt;
		this.hairColor = hcl;
		this.eyeColor = ecl;
		this.passportID = pid;
		this.countryID = cid;
		this.isValidPart1 = this.validatePart1();
		this.isValidPart2 = this.validatePart2();
	}

	validatePart1() {
		return !!(this.birthYear && this.issueYear && this.expirationYear && this.height && this.hairColor && this.eyeColor && this.passportID && this.countryID);
	}

	validatePart2() {
		return this.isValidPart1
			&& this.numIsInRange(this.birthYear, 1920, 2002)
			&& this.numIsInRange(this.issueYear, 2010, 2020)
			&& this.numIsInRange(this.expirationYear, 2020, 2030)
			&& this.validateHeight()
			&& this.validateHairColor()
			&& this.validateEyeColor()
			&& this.validatePassportID();
	}

	validateHeight() {
		let [numInCm, remainderFromCmCheck] = this.height.split("cm");
		if (remainderFromCmCheck === "") {
			return this.numIsInRange(numInCm, 150, 193);
		}
		let [numInIn, remainderFromInCheck] = this.height.split("in");
		if (remainderFromInCheck === "") {
			return this.numIsInRange(numInIn, 59, 76);
		}
		return false;
	}

	validateHairColor() {
		const isValidHairColor = RegExp(/^#[0-9a-f]{6}$/i);
		return isValidHairColor.test(this.hairColor);
	}

	validateEyeColor() {
		const validEyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
		return validEyeColors.includes(this.eyeColor);
	}

	validatePassportID() {
		const isValidPassportID = RegExp(/^[0-9]{9}$/);
		return isValidPassportID.test(this.passportID);
	}

	numIsInRange(num, min, max) {
		return num >= min && num <= max;
	};
}

const part1 = () => {
	let numValidPassports = 0;

	const passports = readFile().map(data => {
		const passport = {};
		data.split(/ |\n/).forEach(pair => {
			const [key, value] = pair.split(":");
			passport[key] = value;
		});

		const standardPassport = new Passport(passport);
		if (standardPassport.isValidPart1) {
			numValidPassports++;
		}
		return standardPassport;
	});

	console.log(numValidPassports);
};

const part2 = () => {
	let numValidPassports = 0;

	const passports = readFile().map(data => {
		const passport = {};
		data.split(/ |\n/).forEach(pair => {
			const [key, value] = pair.split(":");
			passport[key] = value;
		});

		const standardPassport = new Passport(passport);
		if (standardPassport.isValidPart2) {
			numValidPassports++;
		}
		return standardPassport;
	});

	console.log(numValidPassports);
};

part2();