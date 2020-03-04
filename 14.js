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
 * │   └── CatServiceAsyncCallbacks.js
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

app.use("/", HomeRouter.initRoutes());
app.use("/cats", CatRouter.initRoutes());

/**
 * Here we are actually using async still but I am showing you how to convert callback functions
 * into promises you can use await with.
 * 
 * As long as a callback follows the standard (error, result) signature, util.promisify does the job.
 * 
 * None of the code below has changed, all I have done is wrapped the CallbacksLibrary functions
 * we are using with util.promisify. Check out CatServiceAsyncCallbacks.js
 */
const CatServiceAsyncCallbacks = require("./services/CatServiceAsyncCallbacks");
const catService = new CatServiceAsyncCallbacks();

app.use("/async-cat/:catNumber", async function (request, response) {

    try {

        const cat = await catService.getCat(request.params.catNumber);
        
        return response.send(cat);

    } catch (error) {
        return response.send(error);
    }
});

app.use("/async-cat", async (_request, response) => {

    const cats = await catService.getCats();

    return response.render("cats/index", {
        cats: cats
    });
});

app.listen(3001, function () {
    console.log("I'm listening!");
});
