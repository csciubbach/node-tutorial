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
 * │   ├── CallbackLibrary.js
 * │   └── CatServiceCallbacks.js
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

/**
 * Stripped home into its own router
 */
const homeRouter = require("./routers/HomeRouter");
const catRouter = require("./routers/CatRouter");

app.use("/", homeRouter.initRoutes());
app.use("/cats", catRouter.initRoutes());

/**
 * We're going to have amazing fun with asynchronous code ;)
 */
const CatServiceCallbacks = require("./services/CatServiceCallbacks");
const catService = new CatServiceCallbacks();

app.use("/async-cat/:catNumber", function (request, response) {

    /**
     * So the execution of this function continues after the process.nextTick calls
     * the callback we are providing below.
     */
    return catService.getCat(request.params.catNumber, (error, cat) => {

        if (error) { // Your error catcher
            // Here we end the function with our return.
            return response.send(error);
        }

        return response.send(cat);
    });
});

app.use("/async-cat", (_request, response) => {

    return catService.getCats(function (error, cats) {

        if (error) {
            /**
             * Do something with the error. Recover or fail gracefully.
             * 
             * This is your "catch".
             */
            console.error(error);
        }

        return response.render("cats/index", {
            cats: cats
        });
    });
});

app.listen(3001, function () {
    console.log("I'm listening!");
});
