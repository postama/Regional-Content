## 21.1 Lesson Plan - Advanced JavaScript. Debugging, Promises, Async/Await, Rest/Spread

### Overview

In this class we will be diving into some more advanced JavasScript topics

##### Instructor Priorities

* Students should be able to use the VS Code and/or the Chrome Dev Tools Debugger

* Students should understand promise chaining

* Students should be familiar with the async/await syntax

* Students should have basic familiarity with rest/spread

#### Instructor Notes

* Today's class is mostly about familiarity of these advanced topics, so if students see them in tutorials, or on the job, it won't be the first time encountering them. 

* Emphasize that what they learn today is not necessary for project 3 completion, or homeworks

* Encourage questions on other JavaScript syntax they may have seen

- - -

### 1. Instructor Do: Show the Chrome Debugger (10 min.) ~ 6:30 - 6:40

* Slack out 01-Ins-JQuery-Debug for students to follow along

* Open 01-Ins-JQuery-Debug jquery-calculator.html

* Open Chrome DevTools

* Click Sources

* Add a breakpoint on line 59 and trigger it by doing a calcuation in the UI

* In the 'Scope' section open up 'Closure'

** Feel free to discuss what is meant by 'Closure' here

* Show the different variables available

* Show the various controls available at the top of the debugger window and discuss what each one does

** Resume - Continues the script

** Optionally cover these more complex commands:

*** Step over next function call - Do not go into the next function call, just have the function execute but stay in the function you are in

*** Step into next funciton call - Go into the next function to see it's contents and debug it

*** Step out of current function - when done debugging a function, go back to where it was called

** Step Go to the next line of the function

* Use the 'Step' command to show how firstNumber changes when it was parsed (line 65)

* There is a bug on line 79. (Math.pow arguments are switched)

** Demo the bug by doing a exponent operator in the UI

** Fix the bug using the debugging tool.

### 2. Students Do - Debugger practice (10 min.) ~ 6:40 - 6:50

* Slack out 02-Stu-JQuery-Debug

* Encourage the students that if they finish early to try to open the debugger on an old homework or activity

### 3. Instructor Do - Review Debugger practice (5 mins) ~ 6:50 - 6:55

* Show how to find the bug. The bug is on line 28. It should be `+ min`, not `+ 5`

* Demo step into, step out of withe the function call

### 4. Instructor Do - Demo debugging with React (5 mins) ~ 6:55 - 7:00

* Discuss how since React is built with webpack - the debugger works a little differently

* Luckily React React App provides `.map` files that will map the built webpack files into the files we wrote - so we can still use the debugger

* move the `src` folder to where you created your react app

* run the react app

* open the dev tools

* Show the orange folder

* Open up that source folder, then /src/components.

* Set a breakpoint on line 14 and line 24. 

* Demonstrate the breakpoints and the information available

### 5. Students Do - Debugging with React (10 min) ~ 7:00 - 7:10

* Slack out 04-Stu-React-Debug

### 6. Node Debugging (10 min) ~ 7:10 - 7:20

* We can also debug our node applications

* Open 05-Ins-Node-Debug in a new VSCode Window

* npm install to get the dependencies

* In the Debug menu press Play

* Click the Node.js environment

* Add a break point to line 77

* Navigate to http://localhost:3000/ to open the app

* Add a new character to trigger the breakpoint

* Show the local variables (req.body, etc.)

* Show the different UI for VS Code Debugging vs. Chrome Debugging

* Discuss how you can debug client side applications with VS Code as well, but that can take a little more set up: https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code


### 7. Students Do - Node Debugging (10 min) ~ 7:20 - 7:30

* Slack out 06-Stu-Node-Debug

### 8. Try / Catch (10 min) 7:30 - 7:40

* Discuss the importantance of error handling

* We have been handling errors with `.catch` which is important for catching errors in _async_ operations

* But what if we want to catch our errors in _synch_ operations?

* Show the jQuery calculator example, this time to account for dividing by 0 and errors too large

### 9. Promises (15 min) 7:40 - 7:55

* Open 08 - Ins-Promises

* Run schema.sql to create the database

* Run npm install to install dependencies

* Adjust your username / password in config.json

* We want to add axios to get a movie description from OMDB if someone posts a blog about a movie

* Change :
```
  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
```

To
```
    app.post("/api/posts", function (req, res) {
        axios.get(`https://www.omdbapi.com/?t=${req.body.title}&y=&plot=short&apikey=trilogy`)
            .then(response => {
                return db.Post.create({
                    title: req.body.title,
                    body: req.body.body,
                    category: req.body.category,
                    description: response.data.plot
                })
            })
            .then(dbPost => res.json(dbPost))
            .catch(e => res.status(500));
    });
```

* Discuss how promises can be 'chained'. If you return a promise, you can add .then and continue the promise chain

### 10. Break (15 min) ~ 7:55 - 8:10


### 11. Async Await (15 min) 8:10 - 8:25

* In the previous exercise change it to 

```
    app.post("/api/posts", async function (req, res) {
        const response = await axios.get(`https://www.omdbapi.com/?t=${req.body.title}&y=&plot=short&apikey=trilogy`);
        const dbPost = await db.Post.create({
                    title: req.body.title,
                    body: req.body.body,
                    category: req.body.category,
                    description: response.data.plot
                });
        res.json(dbPost);
    });
```

* Discuss how anything that returns a promise can be 'await'ed. 

* `await` must be used in an `async` function 

* An `async` function always returns a Promise

* Then discuss that a few benefits of async/await are:

** More concise code

** Error handling that follows the same format as sync code

* Demo error handling by changing it to 

```
    app.post("/api/posts", async function (req, res) {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?t=${req.body.title}&y=&plot=short&apikey=trilogy`);
            const dbPost = await db.Post.create({
                        title: req.body.title,
                        body: req.body.body,
                        category: req.body.category,
                        description: response.data.plot
                    });
            res.json(dbPost);
        } catch(e) {
            res.status(500)
        }
    });
```

### 12. Students Do - Convert to async / await (20 mins) 8:25 - 8:45

Slack out 09-Stu-Async-Await.
Students will convert several routes to use async/await


### 13. Instructor Do - Obj. and Array Destructuring 8:45 - 9:00
* Explain that object destructuring is a way for us to pull properties off of an object an onto separate variables for easier access. We can achieve this without ES6, but now we have a newer shorthand for doing so.

* Go through the examples in 10-Destructuring/index.js

* Slack out this article https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/

### 14. Students Do - Destructuring 9:00 - 9:15
* Slack out 11-Stu-Destucturing

### 15. Instructor Do - Spread Operator (15 mins) 9:15-9:30

* Go through the examples in 12-Ins-Spread/index.js

* Show some common use cases for the spread operator

I wasn't sure how long this lesson would take, so I included a final activity based on whether or not there is time.

### 16. Students Do - Spread Operator (15 mins) 9:30-9:45

* slack out 13-Stu-Spread



