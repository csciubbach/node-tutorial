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
 * │   └── CatServiceAsyncPromises.js
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

const homeRouter = require("./routers/HomeRouter");
const catRouter = require("./routers/CatRouter");

app.use("/", homeRouter.initRoutes());
app.use("/cats", catRouter.initRoutes());

/**
 * We're going to have amazing fun with asynchronous code ;)
 */
const CatServiceAsyncPromises = require("./services/CatServiceAsyncPromises");
const catService = new CatServiceAsyncPromises();

/**
 * For a function to use await it must be marked with async as below.
 * 
 * It converts this function into a promise behind the scenes.
 */
app.use("/async-cat/:catNumber", async function (request, response) {

    try {

        const cat = await catService.getCat(request.params.catNumber);
        /** 
         * Tada! We can use await and make our async code look as if it is synchronous.
         */

        return response.send(cat);

    } catch (error) {
        /**
         * Our catch is a literal catch
         */
        return response.send(error);

    } finally {
        // Just showing off finally for incredible fun
    }
});

// Also fat arrow functions can be marked async.
app.use("/async-cat", async (_request, response) => {

    /**
     * try is not really necessary if you "know" there won't be errors.
     */
    const cats = await catService.getCats();

    return response.render("cats/index", {
        cats: cats
    });
});

app.listen(3001, function () {
    console.log("I'm listening!");
});
