// // var let const

// // console.log("Hello World from Javscript");

// // var hello;
// // hello = "Hello World var";

// // console.log(hello);

// // // const hello1;
// // // hello1 = "Hello World  again";

// // // console.log(hello1);

// // let hello2;
// // hello2 = "hello World let";

// // console.log(hello2)


// // String Concatenation
// var name = 'jithin';
// console.log(`My name is ${name}`);

// //Arrrays

// const fruits = ['Mango', 'apple','banana']
// console.log("Before push :"+fruits);

// fruits.push('pineapple')
// console.log("after push :"+fruits);

// fruits.shift()
// console.log("after shift :"+fruits)

// fruits.pop()
// console.log("after pop :"+fruits)

// fruits.unshift('grapes')
// console.log("after unshift :"+fruits);

// var months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']


const person = {
    firstname: 'Jackie',
    lastname: 'Chan',
    age: 30,
    hobbies: ['Karate', 'Singing', 'movies'],
    address: {
        street: '4th block, 6th main, RMV',
        city: 'Bangalore',
        state: 'KA'
    }
}
// alert(person)
console.log(person);   // Output :: {'Jackie', 'Chan', 30, ['Karate', 'Singing', 'movies'], {'4th block, 6th main, RMV', 'Bangalore'}}
console.log(`${person.firstname} ${person.lastname}`);    // Output :: Jackie Chan

console.log(person.hobbies);   // Output :: Singing

console.log(person.address.city);   // Output :: Bangalore
;
person.email = 'suvarna@gmail.com'  // Another element can be added to person;
console.log(person)
