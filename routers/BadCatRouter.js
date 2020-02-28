const express = require("express");
const catRepository = require("../data/catRepository");

class BadCatRouter {

    static initRoutes () {

        const catRouter = express.Router();

        catRouter.get("/", function (_request, response) {
            return response.send(catRepository);
        });

        catRouter.get("/:catNumber", function (request, response) {

            const cat = catRepository[request.params.catNumber];

            return response.send(cat);
        });

        return catRouter;
    }
}

module.exports = BadCatRouter;
