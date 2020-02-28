const express = require("express");

const app = express();

app.get("/", function (_request, response) {
    return response.send("Hello world!");
});

/**
 * We made a module for this because this file is really meant for config
 * and startup. It's bad because it is not very testable
 */
const badCatRouter = require("./routers/BadCatRouter");

app.use("/cats", badCatRouter.initRoutes());

app.listen(3001, function () {
    console.log("I'm listening!");
});
