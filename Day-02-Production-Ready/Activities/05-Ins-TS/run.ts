import { people } from './people';

const creator = people.find(person => person.languages.includes("JS"));
console.log(`${creator.name} created JS`);

const staticCreators = people
    .filter(person => person.static === true)
    .map(person => person.name)
    .join(", ");

console.log(`${staticCreators} created static languages`);
