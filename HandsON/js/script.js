// var let const

// console.log("Hello World from Javscript");

// var hello;
// hello = "Hello World var";

// console.log(hello);

// // const hello1;
// // hello1 = "Hello World  again";

// // console.log(hello1);

// let hello2;
// hello2 = "hello World let";

// console.log(hello2)


// String Concatenation
var name = 'jithin';
console.log(`My name is ${name}`);

//Arrrays

const fruits = ['Mango', 'apple','banana']
console.log("Before push :"+fruits);

fruits.push('pineapple')
console.log("after push :"+fruits);

fruits.shift()
console.log("after shift :"+fruits)

fruits.pop()
console.log("after pop :"+fruits)

fruits.unshift('grapes')
console.log("after unshift :"+fruits);

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']





