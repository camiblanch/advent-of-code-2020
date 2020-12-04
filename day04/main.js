const readFile = (file = "input.txt") => {
	const fs = require("fs");
	return fs.readFileSync(file).toString().split("\n\n");
};

class Passport {
	constructor({byr, iyr, eyr, hgt, hcl, ecl, pid, cid = "North Pole"}) {
		this.birthYear = byr;
		this.issueYear = iyr;
		this.expirationYear = eyr;
		this.height = hgt;
		this.hairColor = hcl;
		this.eyeColor = ecl;
		this.passportID = pid;
		this.countryID = cid;
		this.isValid = this.validate();
	}

	validate() {
		return !!(this.birthYear && this.issueYear && this.expirationYear && this.height && this.hairColor && this.eyeColor && this.passportID && this.countryID);
	}
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
		if (standardPassport.isValid) {
			numValidPassports++;
		}
		return standardPassport;
	});

	console.log(numValidPassports);
};

part1();