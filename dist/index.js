'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['', ' + ', ' = ', ''], ['', ' + ', ' = ', '']);

var _module = require('./module');

var myAlias = _interopRequireWildcard(_module);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// module import
console.log('bonjour', (0, _module.hello)());
console.log('myAlias.hello()', myAlias.hello());
console.log('now', _module.time);
console.log('myAlias.time', myAlias.time);
console.log('client', myAlias.default.get());

// arrow function

var greeting = function greeting(name) {
    return 'hello ' + name;
};

var firstName = 'John';
console.log(greeting(firstName));

var person = { firstName: firstName, lastName: 'Lennon' }; // `firstName` is a "shorthand property"

// destructuring assignment 1
var greetingPerson = function greetingPerson(_ref) {
    var firstName = _ref.firstName,
        lastName = _ref.lastName;
    return greeting(firstName + ' ' + lastName);
};

console.log(greetingPerson(person));

// block scoping with `let`

var value = 1;

{
    var _value = 2;
    console.log(_value);
}

console.log(value);

// function with default parameter

function greet(firstName) {
    var lastName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Doe';

    return firstName + ' ' + lastName;
}

console.log(greet(firstName));
console.log(greet(firstName, 'Lennon'));

function doSomething() {
    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        return console.log('execute action');
    };

    action();
}

doSomething();

var doSomethingElse = function doSomethingElse() {
    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        return console.log('execute another action');
    };
    return action();
};

doSomethingElse();

// constant reference

var API_KEY = 'xxxx';

console.log(API_KEY);

var foo = { bar: 1 };

console.log(foo);

foo.bar = 2; // NOTE: we cannot reassign `foo` but we can reassign `foo.bar`

console.log(foo);

// Object enhancement

var obj1 = _defineProperty({
    firstName: firstName,
    doSomething: doSomething,
    fn: function fn() {
        console.log('fn is here');
    }
}, 'lastName', 'Lennon');

console.log(obj1.firstName);
console.log(obj1.lastName);
obj1.doSomething();
obj1.fn();

// spread operator

var arr = [1, 2, 3];

console.log([].concat(arr, [4, 5]));

var addThree = function addThree(a, b, c) {
    return a + b + c;
};

console.log(addThree.apply(undefined, arr));

// template literal

var x = 10;
var y = 20;
console.log(x + ' + ' + y + ' = ' + (x + y));

function tag(strings) {
    console.log('strings', strings);

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    console.log('values', values);
    return values[0] + ' + ' + values[1] + ' = ' + values[2];
}

var message = tag(_templateObject, x, y, x + y);
console.log(message);

// variadic function

function variadic() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    console.log(args);
}

variadic(1, 2);
variadic(1, 2, 3, 4);

// destructuring assignment 2

var _color$position = { color: 'blue', position: 'somewhere' },
    color = _color$position.color,
    position = _color$position.position;


console.log(color, position);

function generateObject() {
    return { color: 'red', position: 'anywhere' };
}

var _generateObject = generateObject(),
    colour = _generateObject.color,
    location = _generateObject.position;

console.log(colour, location);

var _ref2 = [1, 2, 3, 4, 5],
    first = _ref2[0],
    last = _ref2[4];

console.log(first, last);
var _ref3 = [6, 7, 8];
first = _ref3[0];
var _ref4 = [6, 7, 8];
last = _ref4[2];

console.log(first, last);

// Array.from

console.log('Array.from string', Array.from('foo'));
var set = new Set([1, 2, 3]);
console.log('set', set);
console.log('Array.from set', Array.from(set));
var map = new Map([['a', 1], ['b', 2]]);
console.log('map', map);
console.log('Array.from set', Array.from(map));

// NOTE: Array.from can be very useful when receive a collection where
// `prototype` is empty cause it will add methods like `map`, `reduce` and `filter`

// the new `for`

var _arr = [1, 2, 3];
for (var _i = 0; _i < _arr.length; _i++) {
    var i = _arr[_i];
    console.log('for', i);
}

// ES6 parameter with required parameter

function requiredParameter(name) {
    console.log('throw Error("' + name + ' parameter is missing")');
}

function thatDoesSomething(_ref5) {
    var _ref5$arg = _ref5.arg,
        arg = _ref5$arg === undefined ? requiredParameter('arg') : _ref5$arg;
}

thatDoesSomething({});
thatDoesSomething({ arg: 'value' });

// Map (Key can be any type even functions. Bring some new methods)

var myMap = new Map();
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

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = myMap.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref6 = _step.value;

        var _ref7 = _slicedToArray(_ref6, 2);

        var key = _ref7[0];
        var _value2 = _ref7[1];

        console.log(key + ' = ' + _value2);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

myMap.delete(1);
console.log('myMap.size', myMap.size);
myMap.clear();
console.log('myMap.size', myMap.size);

// Set

var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
console.log('mySet', mySet);
mySet.add(5); // Set { 1, 5 }
console.log('mySet', mySet);

mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set

console.log('mySet', mySet.size);

mySet.delete(5); // removes 5 from the set
mySet.has(5); // false, 5 has been removed

console.log('mySet', mySet.size);

// intersect can be simulated via
var set1 = new Set([1, 2, 3, 4]);
var set2 = new Set([3, 4, 5, 6]);

console.log('intersection', new Set([].concat(_toConsumableArray(set1)).filter(function (x) {
    return set2.has(x);
})));

console.log('difference', new Set([].concat(_toConsumableArray(set1)).filter(function (x) {
    return !set2.has(x);
})));

// function arguments

function myFunction1() {
    console.log(arguments);
    console.log('arguments is array like, no map, reduce or filter', arguments.forEach);
    // you can either
    console.log('arguments', [].map.call(arguments, function (arg) {
        return arg;
    }));

    // or ES6
    console.log('arguments', Array.from(arguments).map(function (arg) {
        return arg;
    }));
}

myFunction1(1, 2, 3);

function myFunction2() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
    }

    console.log('args', args);
    console.log('args.map', args.map);
}

myFunction2(1, 2, 3);

// Promises

function processPromise(promise) {
    promise.then(function (data) {
        console.log(data);
        return data;
    }).then(function (data) {
        return console.log('Super! ' + data);
    }).catch(function (error) {
        console.log(error);
        return error;
    });
}

var succeedPromise = new Promise(function (resolve, reject) {
    return resolve('Yay!');
});
var failedPromise = new Promise(function (resolve, reject) {
    return reject('Something bad happened');
});
processPromise(succeedPromise);
processPromise(failedPromise);