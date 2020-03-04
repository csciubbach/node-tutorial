/**
 * Associated files
 * .
 * ├── 10.js
 * ├── controllers
 * │   ├── HomeController.js
 * │   └── AsyncCatController.js
 * ├── data
 * │   ├── PromiseLibrary.js
 * │   └── catRepository.js
 * ├── routers
 * │   ├── HomeRouter.js
 * │   └── AsyncCatRouter.js
 * ├── services
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

const HomeRouter = require("./routers/HomeRouter");
const AsyncCatRouter = require("./routers/AsyncCatRouter");

app.use("/", HomeRouter.create());
app.use("/cats", AsyncCatRouter.create());

app.listen(3001, function () {
    console.log("I'm listening!");
});
