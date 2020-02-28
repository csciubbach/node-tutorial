const express = require("express");
/**
 * Moved cats into a module, check the data folder for the catRepository.js file.
 */
const catRepository = require("./data/catRepository");

const app = express();

app.get("/", function (_request, response) {
    return response.send("Hello world!");
});

app.get("/cats", function (_request, response) {
    return response.send(catRepository);
});

/**
 * Let's add a url parameter to get our favourite cat
 * 
 * These are denoted by colon followed by a variable name and can appear
 * in the middle of urls e.g.:
 * /cats/:catNumber/friends
 * 
 * The param will be found in request.params.catNumber
 */
app.get("/cats/:catNumber", function (request, response) {

    const cat = cats[request.params.catNumber];

    return response.send(cat);
});

/**
 * Test this by entering "node 4" into the terminal and navigate to:
 * http://localhost:3001/cats/0
 */

app.listen(3001, function () {
    console.log("I'm listening!");
});
