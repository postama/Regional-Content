import { Person } from './person';

export type Language = {
    name: string,
    static: boolean
};

export const people: Person[] = [{
    name: 'Jose',
    languages: [{
        name: 'Elixir',
        static: false
    }]
}, {
    name: 'Bjarne',
    languages: ['C++'],
    static: true
}, {
    name: 'Joe',
    languages: ['Erlang'],
    static: false
}, {
    name: 'James',
    languages: ['Java'],
    static: true
}, {
    name: 'Ken',
    languages: ['B', 'Go'],
    static: true
}, {
    name: 'Brendan',
    languages: ['JS'],
    static: false
}, {
    name: 'Yukihiro',
    languages: ['Ruby'],
    static: false
}]