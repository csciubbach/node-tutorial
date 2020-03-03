/**
 * Associated files
 * .
 * ├── 5.js
 * └── data
 *     └── catRepository.js
 */

const express = require("express");
const catRepository = require("./data/catRepository");

const app = express();

app.get("/", function (_request, response) {
    return response.send("Hello world!");
});

/**
 * Cats are getting a bit big now so let's define a separate router
 */
const catRouter = express.Router();

catRouter.get("/", function (_request, response) {
    return response.send(catRepository);
});

catRouter.get("/:catNumber", function (request, response) {

    const cat = catRepository[request.params.catNumber];

    return response.send(cat);
});

app.use("/cats", catRouter);
/**
 * The app now sends every request that matches /cats through the
 * catRouter. The app works exactly the same as before.
 * 
 * A router has the same thing as app for get/post/put etc.
 * 
 * You've also seen .use now, which tells middleware (interceptors)
 * to run on the given path (defaults to "/" if no path is supplied)
 */

/**
 * Test this by entering "node 5" into the terminal and navigate to:
 * http://localhost:3001/cats/0
 */

app.listen(3001, function () {
    console.log("I'm listening!");
});
