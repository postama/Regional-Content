## 21.2 Lesson Plan - Production Ready JS

### 1. Accessibility / ARIA (15 min) 10:00 - 10:15

Slides

* alt text for images

* If you can use a native HTML element [HTML] or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so.

** Semantic HTML (Article, Section, Aside) etc.

* Do not change native semantics, unless you really have to.

`<h2 role=tab>heading tab</h2>`

`<div role=tab><h2>heading tab</h2></div>`

* All interactive controls must be useable wtih the keyboard

* aria-label, aria-labelledby and aria-describedby 

* role="presentation", role="menu", role="tab", role="search"

* Color blindness

* High contrast

* Look good with larger fonts

https://a11yproject.com
https://www.youtube.com/watch?v=qdB8SRhqvFc

### 2. Accessbility Exercise (15 min) 10:15 - 10:30


### 2. Top 10? Security mistakes Junior Devs make (25 min) 10:30 - 10:55

* https://docs.google.com/presentation/d/1N7Mzwz6jnVe7hO0tqWVQlyHmRLgVdfaQIwRNWK3ZUyc/edit#slide=id.g5e21877856_0_137


### 4. Asset minification

** PageSpeed Insights

* 1. Show before and after with images affect

** Kraken.io
** Automated Scripting
** Photoshop, etc.

* 2. Show before and after JS minification

** Webpack

### 5. UI Testing

* 1. Jest
* 2. Cypress

### 6. Statically Typed Languages with TypeScript

* Show TS on Microsoft
* Simple case - Add takes an number, not a string (online + example)
* Better autocomplete
* Easier refactor

### 7. Next.js?