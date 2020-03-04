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

const homeRouter = require("./routers/HomeRouter");
const catRouter = require("./routers/AsyncCatRouter");

app.use("/", homeRouter.initRoutes());
app.use("/cats", catRouter.initRoutes());

app.listen(3001, function () {
    console.log("I'm listening!");
});
