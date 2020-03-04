/**
 * Associated files
 * .
 * ├── 10.js
 * ├── controllers
 * │   ├── HomeController.js
 * │   └── CatController.js
 * ├── data
 * │   └── catRepository.js
 * ├── routers
 * │   ├── HomeRouter.js
 * │   └── CatRouter.js
 * ├── services
 * │   ├── PromiseLibrary.js
 * │   └── CatServicePromises.js
 * └── views
 *     ├── cats
 *     │   ├── addCat.pug
 *     │   └── index.pug
 *     └── index.pug
 */

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));

const HomeRouter = require("./routers/HomeRouter");
const CatRouter = require("./routers/CatRouter");

app.use("/", HomeRouter.create());
app.use("/cats", CatRouter.create());

/**
 * We're going to have amazing fun with asynchronous code ;)
 */
const CatServicePromises = require("./services/CatServicePromises");
const catService = new CatServicePromises();

app.use("/async-cat/:catNumber", (request, response) => {

    return catService
        .getCat(request.params.catNumber)
        .then(cat => response.send(cat))
        .catch(error => response.send(error));
});

app.use("/async-cat", function (_request, response) {
    /**
     * In the callback code we were able to receive cats and an error,
     * but this gives us only two options.
     */
    return catService.getCats()
        .then(cats => response.render("cats/index", {
            cats: cats
        }))
        .catch(error => console.error(error))
        .finally(() => {
            console.log("You can have a finally block if you needed one.");
        });
    /**
     * As you can see we still need this return with promises like callbacks.
     * 
     * The next file will show async/await which makes promises look synchronous.
     */
});

app.listen(3001, function () {
    console.log("I'm listening!");
});
