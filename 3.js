/**
 * Associated files
 * .
 * └── 3.js
 */

const express = require("express");

const app = express();

app.get("/", function (_request, response) {
    return response.send("Hello world!");
});

/**
 * Before you think I don't know what I'm doing,
 * we obviously need a route to return cats.
 */
const cats = [
    "Alfred",
    "Mildred",
    "Boeuf"
];

app.get("/cats", function (_request, response) {
    return response.send(cats);
});

/**
 * Test this by entering "node 3" into the terminal and navigate to:
 * http://localhost:3001/cats
 */

app.listen(3001, function () {
    console.log("I'm listening!");
});
