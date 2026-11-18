// // part one: Basic(Variables & Data Types)

// // 1
// let a = 10;
// let b = 20;
// console.log(a + b);

// // 2
// const name = "sabbir hosen";
// let age = 22;
// age++;
// console.log(age);

// // 3
// console.log(typeof 42);
// console.log(typeof "Hello");
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);


// // 4
// let c = "50";
// let d = "10";
// console.log(c + d);
// console.log(c - d);


// // 5
// let e = null;
// let f;
// console.log(e);
// console.log(f);
// console.log(null == undefined);
// console.log(null === undefined);


// // 6
// let birthYear = 2000;
// let currentYear = 2026;
// let year = currentYear - birthYear;
// console.log(year);


// // 7
// let isLoggedIn = true;
// console.log(!isLoggedIn);


// // 8
// let x = 5;
// let y = x++;
// console.log(x);
// console.log(y);


// // 9
// let Name = "sabbr";
// let boyos = 20;
// console.log(`My name is ${Name} and I am ${boyos} years old.`);

// // 10
// console.log(myName);






// part two: Intermediate(Operators & Simple Conditions)


// // 11
// let number = 10;

// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// // 12
// let age = 20;

// if (age >= 18) {
//   console.log("You can vote.");
// } else {
//   console.log("You cannot vote.");
// }


// // 13
// let point = -5;

// if (point > 0) {
//   console.log("Positive");
// } else if (point < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }


// // 14
// let character = "a";

// if (
//   character === "a" ||
//   character === "e" ||
//   character === "i" ||
//   character === "o" ||
//   character === "u"
// ) {
//   console.log("Vowel");
// } else {
//   console.log("Consonant");
// }


// // 15
// let carector = 10;

// let result = carector > 5 ? "Greater than 5" : "Not greater than 5";

// console.log(result);



// // 16
// let word = 15;

// if (word % 3 === 0 && word % 5 === 0) {
//   console.log("Divisible by both 3 and 5");
// } else {
//   console.log("Not divisible by both");
// }



// // 17
// let isStudent = true;
// let hasCoupon = false;

// if (isStudent || hasCoupon) {
//   console.log("You get a discount!");
// } else {
//   console.log("No discount available.");
// }


// // 18
// let g = "5";
// let h = 5;

// console.log(g == h);
// console.log(g === h);

// // 19
// let symbol = 50;

// if (symbol >= 1 && symbol <= 100) {
//   console.log("Number is between 1 and 100");
// } else {
//   console.log("Number is outside the range");
// }


// // 20
// let currentHour = 15;

// if (currentHour < 12) {
//   console.log("Good Morning");
// } else if (currentHour < 18) {
//   console.log("Good Afternoon");
// } else {
//   console.log("Good Evening");
// }



// part three 



// 21
let year = 2024;

if (year % 400 === 0) {
  console.log("Leap Year");
} else if (year % 100 === 0) {
  console.log("Not a Leap Year");
} else if (year % 4 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}



// 22
let marks = 105;

if (marks >= 80 && marks <= 100) {
  console.log("A+");
} else if (marks >= 70 && marks <= 79) {
  console.log("A");
} else if (marks >= 60 && marks <= 69) {
  console.log("A-");
} else if (marks >= 50 && marks <= 59) {
  console.log("B");
} else if (marks >= 40 && marks <= 49) {
  console.log("C");
} else if (marks >= 33 && marks < 39) {
  console.log("D");
} else if (marks >= 0 && marks < 32) {
  console.log("F");

} else {
  console.log("Invalid Marks");

}



// 23
let a = 50;
let b = 30;
let c = 70;

if (a > b && a > c) {
  console.log("A is largest:", a);
} else if (b > a && b > c) {
  console.log("B is largest:", b);
} else {
  console.log("C is largest:", c);
}


// 24
let color = "Red";

switch (color) {
  case "Red":
    console.log("Stop");
    break;

  case "Yellow":
    console.log("Get Ready");
    break;

  case "Green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Traffic Light Color");
}


// 25
let units = 150;
let bill;

if (units <= 100) {
  bill = units * 5;
} else {
  bill = (100 * 5) + ((units - 100) * 8);
}

console.log("Electricity Bill: $" + bill);

// 26
let x = "";
let y = 0;

if (x) {
  console.log("Empty string is Truthy");
} else {
  console.log("Empty string is Falsy");
}

if (y) {
  console.log("Zero is Truthy");
} else {
  console.log("Zero is Falsy");
}

// 27
let num1 = 20;
let num2 = 10;
let operator = "+";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;

  case "-":
    console.log(num1 - num2);
    break;

  case "*":
    console.log(num1 * num2);
    break;

  case "/":
    if (num2 !== 0) {
      console.log(num1 / num2);
    } else {
      console.log("Cannot divide by zero");
    }
    break;

  default:
    console.log("Invalid Operator");
}

// 28

