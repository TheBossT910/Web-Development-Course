//General Notes about Javascript

//for primative types, we have numbers (no int or double, just number), strings, booleans, null and undefined
//NaN: not a number, numerical calculations will not work properly with this value
//variables start with let. Old JS used variables that started with var
let number = true;
//we can change the type without any problem
number = 10;
//we can use double or signle quotes, just be consistent
number = 'hello';
number = "bye"
//accessing the index of 1 on the variable number, a string. This would give us "y"
number[1];
//same thing here, it just needs to be a string type. 
"Mithu!"[0];
//this will give us the length of the string, NOT A METHOD! (notide no parentheses)
"Bob Joe".length
//this will store the string "TahaRashid", concatinating this string
let name = "Taha" + "Rashid";
//this will store as the string "1hi!"
let words = 1 + "hi!";
//typeof operator tells us what primative type something is, in this case it will say words is of type string
typeof words;
words = "hello, WOrld! I am VerY exCiTed for Js!";
//using the toUpperCase() method to make the text in words uppercase and store it in the new variable. Note, the variable words is not changed, it is still what it was previously
let wordsUppercase = words.toUpperCase();
//Same thing, except we are now storing everyting in lowercase in the new variable. Again, the original variable is NOT modified
let wordsLowercase = words.toLowerCase();
//trim() method gets rid of any white spaces before and after the end of the string. Note the space in between hello and everyone is preserved. The original string is unmodified.
words = "     hello everyone         ".trim();
//we can chain multiple methods together, it does trim() then toUpperCase() in order
wordsUppercase = words.trim().toUpperCase();
words = "TahaRashidOzairRashid";
//something.method(argument);
//we can find the index of spaces, words and characters in a string type
//will return 4, as it will return the first "Rashid" it finds, which starts from index 4
let firstSpot = words.indexOf("Rashid");
//indexOf() method will return -1, signifing that it could not find "Zain" in this string
let secondSpot = words.indexOf("Zain");
//returns a portion of the string from index 0 to 9, stopping at index 10. We will store the string "TahaRashid" in this new variable
let store = words.slice(0,10);
//this will return the portion of the string from index 9 until the end. In this case, it will return "OzairRashid"
store = words.slice(10);
//this is basically doing the length of the string minus your number. This is working from the back to the front of the string. In this case, it will return "d"
store = words.slice(-1);
//this will replace the first "Rashid" it finds with "Zain" and stores this new string into the variable. It does not replace everything.
//replaceAll() exists but not all browsers have implemented this, so we avoid this for web development for now
words = words.replace("Rashid", "Zain");
words = "Hello";
//this will return "HelloHelloHello" and store it in the variable. It repeats the whole string 3 times and returns the result as a new string with the original string being unmodified
let newWords = words.repeat(3);

//String templete literials: need to use backticks (`, above the tab key with the tilda, ~) and to to JS inside the string, ${whatever JS I want to do}
let example = `Hello! I am ${11 + 1} years old and I like to say: ${wordsLowercase}`;
console.log(example);

//Math object and its associated methods
//Math.floor(number) basically ignores the decimal numbers
//Math.ceil(number) basically will always round up the decimal numbers
//Math.random() will give a random decimal number from between 0 and 1
//Math.floor(Math.random() * 10) + 1    //this would give you random integer numbers from 1 to 10
//Math.floor(Math.random() * 3) + 20    //I want random numbers from 20 to 22 (20, 21, 22 are my options). Therefore, there are 3 options and we push our values up by 20 (minimum option) to get our desired random integer values
//Math.floor(Math.random() * 11)   //this would give you random integer numbers from 0 to 10
