/**
 * Associated files
 * .
 * └── 2.js
 */

const express = require("express");

const app = express();

/**
 * We have our first path. app allows us to define routes with this signature:
 * path: string, function taking request and response to handle requests at this path
 * 
 * You can use app.get, app.post, app.delete, app.put etc.
 */

app.get("/", function (_request, response) {

    /**
     * request is an object with information about the request. This can include
     * headers, body, cookies, querystring data, url parameters etc.
     * 
     * Middleware is used to populate the request, for example we will need a body parser
     * to add the body to request.body
     * 
     * Response allows us to send json or plain text, or render a view with a view engine if
     * we configure one. Also allows us to set the status, cookies etc.
     */

    return response.send("Hello world!");
});

/**
 * Start this by entering "node 2" into the terminal and navigate to:
 * http://localhost:3001/
 */

app.listen(3001, function () {
    console.log("I'm listening!");
});
