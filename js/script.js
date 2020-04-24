//alert('The Javascript Loaded');
// This is a comment
/*
this is also a comment
*/

//console.log('I have loaded');
//check inspecter- console
//Console is purely for debugging
//console.error('You broke the website');
//red error in console (to throw an error)

//var = init variable
var name = 'My Name is Jenny';
//logs variable
console.log(name);
//logs var type
console.log(typeof name);
var age = 21; 
//Infinity, -Infinity, NaN (not a number)
console.log(age + 5);
//can do arithmetic in console
console.log(age * 5);
console.log(typeof age);

//boolean
var happy = true;
console.log(happy);
console.log (typeof happy);

//if-else statements
if(happy) {
    console.log("Good for you");
} else{
    console.error("Don't worry, be happy.");
}

//null
var value = null;
console.log(value);
console.log(typeof null);

//undefined
var undefinedvar;
console.log(undefinedvar);

//Symbols
var testing = Symbol('test');
console.log(testing);
//End of primitive vars
//...

//Reference Type: Object

if(10 === 10){
    console.log('This is true');
}

if(10 >= 5){
    console.log('This is true');
}

if (10 == 10){
    console.log('This is true');
}

if(10 === '10'){
    console.log('This is true');
}
else{
    console.log('This is NOT true');
}

//= assignment of values
//== checks for equal values
//=== checks for equal values AND data types

//Concatenation
var greeting = 'Hello ' + 'World';
console.log(greeting);

var prefix = 'auto';
var body = 'mobile';
console.log(prefix + body);

var newValueForTesting = '5' + 5;
console.log(newValueForTesting); //output is 55

var anotherNewValue = '10' - 5;
console.log(anotherNewValue); //output is 5

//String Methods
var statement = "Hello World";
console.log(statement.length);
//returns # of characters
console.log(statement.search('World'));
//returns 6 (Index #) of 'World'
console.log(statement.search('foo'));
//returns -1 (false) because it doesn't exist


//Truey/Falsy
if(0){
    console.log('this is true');
}
else{
    console.log('this is false');
}
//Returns false for 0 (Falsy), if input is 1 it returns 1 (Truey)
//Falsey means 'no value/false' when encountered in a boolean context

console.log(false==0);
//evals to true
console.log(false===0);
//evals to false


//function def
function sayHi(){
    return 'Hello there';
}

//function call
var greeter = sayHi();
console.log(greeter);

//Function with arguments
function greetPerson(name){
    if (name === undefined){
        name = 'ye without a name';
    }
    return 'Hello ' + name;
}

var greetedPerson =greetPerson('Jenny');
console.log(greetedPerson)
var otherGreetedPerson = greetPerson();
console.log(otherGreetedPerson);

//...
//Object Literal
var Person1 = {
    name: 'Jenny',
    age: 21,
};
console.log(Person1.name);
console.log(Person1.age);

//Object Construction
var Person2 = new Object();
Person2.name = 'Jenny';
Person2.age = 21;

console.log(Person2.age);

//Object function-not common method
function Person(){
    this.name = 'Jenny';
    this.age = 21;    
}
var Jenny = new Person();
console.log(Jenny.age);

//....

var Person4 = {
    name: 'no-name',
    setName: function(name){
        this.name = name;
    },
    getName: function(){
        return this.name;
    }
}
Person4.setName('Jenny'); //Override no-name
console.log(Person4.getName());

//Array
var numbers = [1,2,3,4,5, 'jenny', {name: 'Joe', age:21,}];
//Alternative: var numbers = new Array(1,2,3,4,5);
//Where can you find 3
console.log(numbers.indexOf(3));
//What is in index 3
console.log(numbers[3]);
console.log(numbers.length);

var nums = [1,2,3];
var numbersSquared = nums.map(function(nums){
    return nums * nums;
});
console.log(nums, numbersSquared);

var numbs = [1,2,3,4];
var evens = numbs.map(function(n){
    if(n % 2 === 0 ){
        return n*n;
    }
    else{
        return n;
    }
    
});
console.log(numbs, evens);