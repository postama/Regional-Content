### Instructions

* First do an npm install

* Make sure mongo is running (run mongod in the terminal)

* Convert the code in server.js to use async/await

Hints:

* Remember that await can only be used in an async function, so it should look like 
```
app.get('/notes', async function(req, res) {
    ...
})
```

* Remember that what a promise resolves to, an awaited function is equal to. For example
```
db.Note.find(})
    .then(function(dbNote){ ...  })
```

becomes

```
let dbNote = db.Note.find({});
```

* Remember to use error handling (`try` / `catch`) instead of (`.catch`)