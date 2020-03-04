/**
 * Associated files
 * .
 * ├── 10.js
 * ├── controllers
 * │   └── CatController.js
 * ├── data
 * │   └── catRepository.js
 * ├── routers
 * │   └── CatRouter.js
 * └── views
 *     ├── cats
 *     │   ├── addCat.pug
 *     │   └── index.pug
 *     └── index.pug
 */

const express = require("express");
/**
 * Sorry. Remember when I referred to a body parser middleware to parse post body?
 * 
 * I've just done `npm install --save body-parser` and adding it now.
 */
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");

/**
 * First use of our middleware section. These are request handlers like in controllers
 * except they do not return any response, they simply do their job and call
 * the next middleware in the chain.
 * 
 * This middleware in pseudocode looks like this:
 * 
 */
const myMiddlewareFunction = function (request, response, next) {
    // Parse raw request for body.
    // Convert it into javascript object
    // set request.body = our new parsed body object
    // call "return next()" to move onto whatever middleware (or finally router) comes next
}
/**
 * Our adding a new cat will work now
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * This is equivalent to the previous example for app.get("/")
 */
app.get("/", (_request, response) => response.render("index", {
    title: "Wow",
    message: "Hello, world!"
}));

const CatRouter = require("./routers/CatRouter");

app.use("/cats", CatRouter.create());

app.listen(3001, function () {
    console.log("I'm listening!");
});
