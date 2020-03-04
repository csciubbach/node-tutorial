/**
 * Associated files
 * .
 * ├── 7.js
 * ├── data
 * │   └── catRepository.js
 * └── routers
 *     └── BetterCatRouter.js
 */

const express = require("express");

const app = express();

app.get("/", function (_request, response) {
    return response.send("Hello world!");
});

const BetterCatRouter = require("./routers/BetterCatRouter");

app.use("/cats", BetterCatRouter.initRoutes());

app.listen(3001, function () {
    console.log("I'm listening!");
});
