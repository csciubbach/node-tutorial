const express = require("express");
const catRepository = require("../data/catRepository");

class BetterCatRouter {

    static create() {

        const catRouter = express.Router();

        /**
         * So before we had anonymous functions, we can actually just change these to
         * named functions, and reference them.
         * 
         * Now the named functions are testable, but for whatever reason this is still
         * considered bad, controller methods should be in their own file.
         */
        catRouter.get("/", BetterCatRouter.getCats);
        catRouter.get("/:catNumber", BetterCatRouter.getCat);

        return catRouter;
    }

    static getCats(_request, response) {
        return response.send(catRepository);
    }

    static getCat(request, response) {

        const cat = catRepository[request.params.catNumber];

        return response.send(cat);
    }
}

module.exports = BetterCatRouter;
