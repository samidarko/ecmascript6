import {hello as bonjour, time as now} from './module';
import myModule from './module';
import * as myAlias from './module';


// module import
console.log('bonjour', bonjour());
console.log('myAlias.hello()', myAlias.hello());
console.log('now', now);
console.log('myAlias.time', myAlias.time);
console.log('client', myModule.get());

// arrow function

let greeting = (name) => `hello ${name}`;

let firstName = 'John';
console.log(greeting(firstName));

let person = {firstName, lastName: 'Lennon'}; // `firstName` is a "shorthand property"

// destructuring assignment 1
let greetingPerson = ({firstName, lastName}) => greeting(`${firstName} ${lastName}`);

console.log(greetingPerson(person));

// block scoping with `let`

let value = 1;

{
    let value = 2;
    console.log(value);
}

console.log(value);

// function with default parameter

function greet(firstName, lastName = 'Doe') {
    return `${firstName} ${lastName}`;
}

console.log(greet(firstName));
console.log(greet(firstName, 'Lennon'));

function doSomething(action = () => console.log('execute action')) {
    action();
}

doSomething();

let doSomethingElse = (action = () => console.log('execute another action')) => action();

doSomethingElse();

// constant reference

const API_KEY = 'xxxx';

console.log(API_KEY);

const foo = {bar: 1};

console.log(foo);

foo.bar = 2;  // NOTE: we cannot reassign `foo` but we can reassign `foo.bar`

console.log(foo);

// Object enhancement

const obj1 = {
    firstName,
    doSomething,
    fn() {
        console.log('fn is here')
    },
    ['lastName']: 'Lennon'
};

console.log(obj1.firstName);
console.log(obj1.lastName);
obj1.doSomething();
obj1.fn();

// spread operator

let arr = [1, 2, 3];

console.log([...arr, 4, 5]);

let addThree = (a, b, c) => a + b + c;

console.log(addThree(...arr));

// template literal

let x = 10;
let y = 20;
console.log(`${x} + ${y} = ${x + y}`);

function tag(strings, ...values) {
    console.log('strings', strings);
    console.log('values', values);
    return `${values[0]} + ${values[1]} = ${values[2]}`
}

let message = tag`${x} + ${y} = ${x + y}`;
console.log(message);

// variadic function

function variadic(...args) {
    console.log(args);
}

variadic(1, 2);
variadic(1, 2, 3, 4);


// destructuring assignment 2

let {color, position} = {color: 'blue', position: 'somewhere'};

console.log(color, position);

function generateObject() {
    return {color: 'red', position: 'anywhere'};
}

let {color: colour, position: location} = generateObject();

console.log(colour, location);

let [first, , , , last] = [1, 2, 3, 4, 5];
console.log(first, last);
[first] = [6, 7, 8];
[, , last] = [6, 7, 8];
console.log(first, last);

// Array.from

console.log('Array.from string', Array.from('foo'));
const set = new Set([1, 2, 3]);
console.log('set', set);
console.log('Array.from set', Array.from(set));
const map = new Map([['a', 1], ['b', 2]]);
console.log('map', map);
console.log('Array.from set', Array.from(map));

// NOTE: Array.from can be very useful when receive a collection where
// `prototype` is empty cause it will add methods like `map`, `reduce` and `filter`

// the new `for`

for (let i of [1, 2, 3]) {
    console.log('for', i);
}

// ES6 parameter with required parameter

function requiredParameter(name) {
    console.log(`throw Error("${name} parameter is missing")`);

}

function thatDoesSomething({arg = requiredParameter('arg')}) {

}

thatDoesSomething({});
thatDoesSomething({arg: 'value'});

// Map (Key can be any type even functions. Bring some new methods)

const myMap = new Map();
myMap.set(1, 'a');
myMap.set(2, 'b');
console.log('myMap', myMap);
console.log('myMap.get(1)', myMap.get(1));
console.log('myMap.get(1)', myMap.get(3));
console.log('myMap.size', myMap.size);
console.log('myMap.keys()', myMap.keys());
console.log('myMap.values()', myMap.values());
console.log('myMap.has(1)', myMap.has(1));
console.log('myMap.has(3)', myMap.has(3));

for (let [key, value] of myMap.entries()) {
    console.log(`${key} = ${value}`);
}

myMap.delete(1);
console.log('myMap.size', myMap.size);
myMap.clear();
console.log('myMap.size', myMap.size);


// Set

const mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
console.log('mySet', mySet);
mySet.add(5); // Set { 1, 5 }
console.log('mySet', mySet);

mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set

console.log('mySet', mySet.size);

mySet.delete(5); // removes 5 from the set
mySet.has(5);    // false, 5 has been removed

console.log('mySet', mySet.size);

// intersect can be simulated via
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);

console.log('intersection', new Set([...set1].filter(x => set2.has(x))));

console.log('difference', new Set([...set1].filter(x => !set2.has(x))));

// function arguments

function myFunction1() {
    console.log(arguments);
    console.log('arguments is array like, no map, reduce or filter', arguments.forEach);
    // you can either
    console.log('arguments', [].map.call(arguments, arg => arg));

    // or ES6
    console.log('arguments', Array.from(arguments).map(arg => arg));
}

myFunction1(1, 2, 3);

function myFunction2(...args) {
    console.log('args', args);
    console.log('args.map', args.map);

}

myFunction2(1, 2, 3);

// Promises

function processPromise(promise) {
    promise
        .then((data) => {
            console.log(data);
            return data;
        })
        .then((data) => console.log(`Super! ${data}`))
        .catch((error) => {
            console.log(error);
            return error;
        });
}

const succeedPromise = new Promise((resolve, reject) => resolve('Yay!'));
const failedPromise = new Promise((resolve, reject) => reject('Something bad happened'));
processPromise(succeedPromise);
processPromise(failedPromise);
