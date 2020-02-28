const express = require("express");
const CatController = require("../controllers/CatController")

class GoodCatRouter {

    static initRoutes () {

        const catRouter = express.Router();

        catRouter.get("/", CatController.getCats);
        catRouter.get("/:catNumber", CatController.getCat);

        return catRouter;
    }
}

module.exports = GoodCatRouter;
