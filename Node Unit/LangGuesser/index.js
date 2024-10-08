//getting dependancies
const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

//getting user input
const input = process.argv[2];

//identify country and return country code
let countryCode = franc(input);
let language = "defaulting...";

//figure out what country the countryCode is from
try {
    language = langs.where("3", countryCode).name.green
} catch {
    language = "Unknown language... Try another sample".red;
}
console.log(language);