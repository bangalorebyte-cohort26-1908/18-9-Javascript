# Javascript Crash Tutorial Highlights


**Javascript is a**

* Highlevel, interpreted programming language
* Conforms ECMAScript specification
* Multi-paradigm
* Runs on client/browser as well as on server (Node.js)


**Highlevel** 
* Unlike C / C++ which are low level languages which depend on/interact with the operating system, Javascript has a lot of abstraction. We don't have to deal with any memory management etc...

**Interpreted** 
* Javascript can be run directly without having to compile using a compiler unlike Java which uses a compiler to compile its code before it could be run. Javascript is a scripting language and it is interpreted.

**ECMAScript** 
* It was created to standardize JavaScript, so as to foster multiple independent implementations. Current standard is ES6 (ECMAScript 6 -2015)

**Multi-paradigm** 
* Meaning, Javascript can be written in many ways.. example: Object-oriented/function codes and not many strict rules to follow while writing a Javascript code like having to follow a certain way.

**Mainly used in client/browser**
* Javascript is a frontend programming language. Mostly used for interactive aspects like form validations, showing alerts to user...etc



### Advantages of using Javascript

* Runs on the browser/is a client-side programming language
* Build interactive interfaces
* Used in building very fast server-side/full-stack application
* Used in Mobile Applications (React Native/NativeScript/Ionic)
* Used in Desktop Application Development (Electron JS)



### Important Topics to learn Javascript

* [ ] Variables & Data types
* [ ] Arrays
* [ ] Object Literals
* [ ] Methods for Strings, Arrays, Objects, etc
* [ ] Loops
* [ ] Conditionals
* [ ] Functions
* [ ] OOP (Prototypes & Classes)
* [ ] DOM Selection
* [ ] DOM Manipulation
* [ ] Events
* [ ] Basic Form Validations


**Some info about the basic usage of Javascript**

* Javascript can be inserted inline in an HTML file 

[EXAMPLE HTML](https://github.com/bangalorebyte-cohort26-1908/18-9-Javascript/blob/suvarna_intro_to_javascript/HTML_Files/LearnJS.html)

but most recomended/industry standards would be to have a seperate .js file and include it in the HTML file (but towards the end of HTML file.

[EXAMPLE Javascript](https://github.com/bangalorebyte-cohort26-1908/18-9-Javascript/blob/suvarna_intro_to_javascript/JS_Files/SampleJS.js)


* DEBUG/Logging :
```javascript
console.log("")
console.error("")
console.warning("")
```
are some of the functions that can be used for debug purposes.


* Commenting in Javascript :
```javascript

<script type="text/javascript">
// This is a single line JavaScript comment

document.write("I have comments in my JavaScript code!");
//document.write("You can't see this!");

/* This is the 
way to write
multiline comments 
in Javascript */

document.write("I have multi-line comments!");
/*document.write("You can't see this!");
document.write("You can't see this!");
document.write("You can't see this!");
document.write("You can't see this!");*/
</script>

```


### Variables 
### =========

* 'var' was the earlier way to declare a variable, but not any more.

* 'let' / 'const' are the new ways. Introduced ES6 or ES2015 onwards.

* Using 'let', you can re-assign the value.
Using 'const', you cannot re-assign value.
Hence it can be decided when to use a 'const' and when not to. 
'const' have to be assigned a value while declaring. I cannot be left un-assigned. 

```
console.log("Hello World from Javscript");

var hello;
hello = "Hello World var";
console.log(hello);

// const hello1;
// hello1 = "Hello World  again"; ### Const doesnt allow you to do this
// console.log(hello1);

let hello2;
hello2 = "hello World let";
console.log(hello2)

```


### Primitive Datatypes in Javascript

* String
* Number
* Boolean
* null
* undefined
* Symbol (Added ES6 onwards)

Example ::
----------
```javascript
const name = 'Sam';
const age = 20;
const score = 4.5;
const isCool = true;
const x = null;
const y = undefined; //Can be set as 'undefined', explicitly.
let z;

console.log(typeof name); //Output :: string
console.log(typeof age); //Output :: number
console.log(typeof score); //Output :: number
console.log(typeof isCool); //Output :: boolean
console.log(typeof x); //Output :: object
console.log(typeof y); //Output :: undefined
console.log(typeof z); //Output :: undefined
```

#### Datatype : string
#### =================


```javascript
const name = 'Sam';
const age = 20;

// Concat method (old style)
console.log('This is ' + name + ' and he is ' + age + ' years old');

// Template string
console.log(``);
console.log(`This is ${name} and he is ${age} years old`);
```

**Some of the common string properties & methods/functions :**

* length ==> name.length  // Output :: 3
* toUpperCase ==> name.toUpperCase()  // Output :: SAM
* toLowerCase ==> name.toLowerCase()  // Output :: sam
* substring ==> name.substring(0,2)  // Output :: sa
* substring ==> name.substring(0,2)  // Output :: sa
* substring ==> name.split('')  // Output :: ["s", "a", "m"]


#### Datatype : Array
#### ================

**Arrays** - are variables that can hold multiple values. It is not a primitive datatype, but an object datatype. Hence the declaration uses 'new Array()' 

```javascript
const cities = new Array("Bangalore", "Delhi", "Mumbai", 4, 5.5, false, null, undefined) // Javascript gives freedom for Arrays to include any datatypes as their elements.


const fruits = 'Apple, Banana, Orange, Pineapple'; //Sample String to Array

const fruitsArray = fruits.split(", ");   //fruitsArray = ["Apple", "Banana", "Orange", "Pineapple"]

fruitsArray[4] = "Watermelon";   //Though fruitsArray is declared using 'const' it can appended with values.
                                // Hence fruitsArray = ["Apple", "Banana", "Orange", "Pineapple", "Watermelon"]


fruitsArray.push('Mango")   //fruitsArray = ["Apple", "Banana", "Orange", "Pineapple", "Watermelon", "Mango"]

fruitsArray.unshift("Strawberry")  //fruitsArray = ["Strawberry", "Apple", "Banana", "Orange", "Pineapple", "Watermelon", "Mango"]
                                //"Strawberry" added at fruitsArray[0] followed by the old list as is

fruitsArray.pop()  //fruitsArray = ["Strawberry", "Apple", "Banana", "Orange", "Pineapple", "Watermelon"]
                    //pops the last one off (mango gone!)


console.log(Array.isArray(fruitsArray));   // Output :: true

console.log(Array.isArray('hello'));   // Output :: false


fruitsArray.indexOf("Banana");   // Output :: 2
```


#### Object literals
#### ===============

Object literals are more like key-value pairs

Example
-------

```javascript

const person {
    firstname: 'Jackie'
    lastname: 'Chan'
    age: 30
    hobbies: ['Karate', 'Singing', 'movies']
    address: {
        street: '4th block, 6th main, RMV'
        city: 'Bangalore'
        state: 'KA'
    }
}

alert.log(person);    // Output :: object:Object
console.log(person);   // Output :: {'Jackie', 'Chan', 30, ['Karate', 'Singing', 'movies'], {'4th block, 6th main, RMV', 'Bangalore'}}
console.log(person.firstname, person.lastname);    // Output :: Jackie Chan

console.log(person.hobbies[1]);   // Output :: Singing

console.log(person.address.city);   // Output :: Bangalore
;
person.email = 'suvarna@gmail.com'  // Another element can be added to person;



const todos{
    {
        id:1
        text: 'Assignment to complete'
        isCompleted: true
    }
    {
        id:2
        text: 'Add files to GITHUB'
        isCompleted: true
    }
    {
        id:3
        text: 'GIT push origin'
        isCompleted: false
    }
}


const todoJSON = JSON.stringify(todos);

console.log(todos);
```



#### Loops : for
#### ===========

```javascript

    for (let i=0, i<10, i++) {
        console.log(i);
    }


    for (let todo of todos) {
        console.log(todo.id);
        console.log(todo.text);
    }

    todos.forEach(function(todo) {
        console.log(todo.id);
        console.log(todo.text);
    })
```

#### Loops : while
#### =============
```javascript
    let i = 0;
    while (i<10){
        console.log(i);
    }
    i++;

```

#### Maps
#### =====

```javascript
    const todoMapObject = todos.map(function(todo) {
        console.log(todo.text);
    })

    todoMapObject - will store a new list/Array of todos' text.
```

#### Filters
#### =======
```javascript
    const todoOnlyCompleted = todos.filter(function(todo) {
        return todo.isCompleted === true;
    }).map(function(todo)){
        return todo.text;
    }

    // Output :: (2) ["Assignment to complete", "Add files to GITHUB"]
```


#### Conditional Statements
#### ======================

```javascript
    const x = 10;

    if (x == 10){
        console.log('x is 10')  
        // This would show output even if x was string i.e. x = '10' (only value match)
    }
    else if(x > 10)
    {
        console.log('x is greater than 10')
    }
    else
    {
        console.log('x is less than 10')
    }

    if (x === 10){
        console.log('x is 10 : Datatype matched as well')  
        // This would show output only if the value matches along woth datatype match
    }
    else
    {
        console.log('x is not 10 or the datatype didnt match')
    }



    const x = 15;
    const x = 22;

    if (x > 10 || y > 30){
        console.log('Either x is greater than 10  OR  y is greater than 30') 
    }
    

    if (x > 10 && y > 30){
        console.log('x is greater than 10  AND  y is greater than 30') 
    }
```


#### Ternary operator :
#### ------------------

```javascript
    const x = 10;

    const color = x > 10 ? 'red' : 'blue';

    console.log(color);
```

#### switch case :
#### -------------
```javascript
    switch(color) {
        case 'red':
            console.log('color is red');
            break;
        case 'blue':
            console.log('color is blue');
            break;
        default:
            console.log('color is neither red nor blue');
            break;
    }
```

#### Functions
#### =========
```javascript
    function addNums(num1 = 1, num2 = 1) {
        return (num1+num2);
    }

    addNums(5,3);  // Output : 8 (overwrites num1 = 1, num2 = 1)



    const addNums = (num1 = 1, num2 = 1) => {
        return (num1+num2);
    }

    // same as 

    const addNums = (num1 = 1, num2 = 1) => (num1+num2);

    todos.forEach((todo) => console.log(todo);
<<<<<<< HEAD
=======


#### Objects (OOP - Prototypes & Classes)
#### ====================================

* By convention, **Constructor function name** should start with a capital letter ('Person' - as in the example below)

```javascript

//Constructor function
function Person(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = dob;
}

//Instantiate object
const person1 = new Person('MK', 'Gandhi', Oct-02-1869)
const person2 = new Person('Narendra', 'Modi', Sep-17-1950)
const person3 = new Person('Amit', 'Shah', Oct-24-1964)

console.log(person1); // Output :: Person {firstname:'MK', lastname:'Gandhi', dob:Oct-02-1869}
console.log(person2.firstname); // Output :: Narendra


//Converting to work on a Date object and creating internal functions
function Person(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);

    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }

    this.getFullName = function() {
        return `${this.firstname} ${this.lastname}`;
    }

}


//Creating Prototypes
function Person(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
        return this.dob.getFullYear();
    }

Person.prototype.getFullName = function() {
        return `${this.firstname} ${this.lastname}`;
    }
```

This is why we use Classes as it is a prettier way / more organized way to store and deal with things.

```javascript
//The Class 
class Person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}
```


#### DOM (Document Object Model)
#### ===========================

Consider this file for reference 

[HTML File](LearnJS_DOM.html)

**Types of Selectors**

* Single Element Selectors
* Multiple Element Selectors


**Single Element Selectors**

Examples : 
```javascript
document.getElementById('my_form')
document.querySelector('h1')
```

**Single Element Selectors**

Examples : 
```javascript
document.getElementsByClassName('item')
document.querySelectorAll('.item')
document.getElementsByTagName('li')
>>>>>>> af71cb6d88ad5ee76720947cddd51a126378d2d7
```