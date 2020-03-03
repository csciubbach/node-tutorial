/**
 * Associated files
 * .
 * ├── 9.js
 * ├── controllers
 * │   └── CatController.js
 * ├── data
 * │   └── catRepository.js
 * ├── routers
 * │   └── CatRouter.js
 * └── views
 *     ├── cats
 *     │   ├── addCat.pug
 *     │   └── index.pug
 *     └── index.pug
 */

const express = require("express");

const app = express();

/**
 * Let's make webpages. We aren't going to serve static files,
 * just render templates. In this case pug templates.
 */
app.set("view engine", "pug");

app.get("/", function (_request, response) {

    /**
     * Welcome to response.render.
     * 
     * It takes the name of a template file (sans extension), plus an object
     * which will be exposed as variables in the template.
     * 
     * See ./views/index.pug for more info.
     * 
     * Run `node 9` and go to http://localhost:3001 again to see.
     */
    return response.render("index", {
        title: "Wow",
        message: "Hello, world!"
    });
});

// Changed router to refer to our new controller which renders views!
const catRouter = require("./routers/CatRouter");

app.use("/cats", catRouter.initRoutes());

/**
 * Check out what we have done with views and the new CatController which
 * contains views.
 * 
 * Then run this and try to add a new cat.
 */

app.listen(3001, function () {
    console.log("I'm listening!");
});
