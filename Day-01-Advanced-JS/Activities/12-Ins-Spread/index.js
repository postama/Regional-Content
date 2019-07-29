const numbers = [1, 2, 3];

Math.max(1, 2, 3) // Returns 3.

// How do we run math.max on an array?

// Before (yuck)

Math.max.apply(null, numbers);

// Now - Spread operator

Math.max(...numbers);

// The easy way to think of the spread operator is that it removes the [] or {}
// From around an array or object

// It can also be used to copy an object or array.

const originalArray = [1, 2, 3];

originalArray.push(4);

console.log(originalArray); // [1, 2, 3, 4]

// What if we want to change it but not modify the original?

const secondArray = [1, 2, 3];

// This is equivalent to [1, 2, 3, 4] (imagine removing the [] around secondArray)
const modifiedArray = [...secondArray, 4];

console.log(secondArray) // [1, 2, 3]
console.log(modifiedArray) // [1, 2, 3, 4]

// A common React library called Redux you can only make copies of state, not modify state
// So the spread operator comes in handy to modify arrays and objects.

const user = { first: 'Rick', last: 'Astley' };
const userWithEmail = { ...user, email: 'rick@roll.net' };

console.log(user);
// prints {first: 'Rick', last:'Astley'}

console.log(userWithEmail)
// prints {first: 'Rick', last: 'Astley', email:'rick@roll.net'}

