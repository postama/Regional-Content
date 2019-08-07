import { people } from './people';

// const creator = people.find(person => person.languages.includes("JS"));
// console.log(`${creator.name} created JS`);

const creator = people.find(person => person.name === 'Jose');
console.log(creator.languages);

const staticCreators = people
    .filter(person => person.static === true)
    .map(person => person.name)
    .join(", ");

console.log(`${staticCreators} created static languages`);
