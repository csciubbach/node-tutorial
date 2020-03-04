/** 
 * Associated files
 * .
 * ├── 8.js
 * ├── controllers
 * │   └── ApiCatController.js
 * ├── data
 * │   └── catRepository.js
 * └── routers
 *     └── GoodCatRouter.js
 */

const express = require("express");

const app = express();

app.get("/", function (_request, response) {
    return response.send("Hello world!");
});

const GoodCatRouter = require("./routers/GoodCatRouter");

app.use("/cats", GoodCatRouter.create());

app.listen(3001, function () {
    console.log("I'm listening!");
});
