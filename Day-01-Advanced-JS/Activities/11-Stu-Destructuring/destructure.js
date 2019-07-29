const person = {
    first: 'Wes',
    last: 'Bos',
    country: 'Canada',
    city: 'Hamilton',
    links: {
        social: {
            twitter: 'https://twitter.com/wesbos',
            facebook: 'https://facebook.com/wesbos.developer',
        }
    }
};


// Switch to use Destructuring
const first = person.first;
const last = person.last;

const twitter = person.links.social.twitter;



const dimensions = [200, 400];

// Switch to use Destrucutring

const width = dimensions[0];
const height = dimensions[1];