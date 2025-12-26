// let text = document.getElementById("text");
// text.style.color = "white";
// text.innerHTML = "Hello World!";

// const onepiece = ["Luffy","Zoro","Sanji","Jimbei","Nami","Robin","Franky","Chopper"];
// console.log(onepiece[7]);
// console.log(onepiece.unshift("Gold D Roger"));
// console.log(onepiece);
// console.log(onepiece.push("Buggy"));
// console.log(onepiece);
// console.log("Hello Console");
// console.log(onepiece[3]);

// let name = "Aniket";

// name= "Aniket Kumar";
// console.log(name);

//1. Mini Task  
console.log("Hello World");
setTimeout(() => {
    console.log("Hello after 3 seconds");
}, );
console.log("Hello Again");

let name = "Aniket Bhoir";
let age = 22;
let isStudent = true;
let disabled =  null;
let address = undefined;
let coords = 100000n;
let symbol = Symbol("id");
let symbol2 = Symbol("id");
console.log(symbol === symbol2);

console.log(typeof(null));
console.log(typeof(0));
let num = 12.5;
console.log(typeof(num));


//objects
let course = {
    name: "Aniket Bhoir",
    age: 22,
    isStudent: true
}

console.log(course.name);

console.log(course["name"]);

course["name"] = "Updated";

console.log(course["name"]);

let course1 = [1,2,2,3,4,5];
console.log(typeof(course1));

for (const key in course) {
    console.log(course[key]);
}

let numbers = [1,2,3,4,5,6,7,8,9,10];

for (let num of numbers) {
    console.log(num);
}
 
