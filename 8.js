const express = require("express");

const app = express();

app.get("/", function (_request, response) {
    return response.send("Hello world!");
});

const goodCatRouter = require("./routers/GoodCatRouter");

app.use("/cats", goodCatRouter.initRoutes());

app.listen(3001, function () {
    console.log("I'm listening!");
});
