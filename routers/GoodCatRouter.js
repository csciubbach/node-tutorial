const express = require("express");
const ApiCatController = require("../controllers/ApiCatController")

class GoodCatRouter {

    static create() {

        const catRouter = express.Router();

        catRouter.get("/", ApiCatController.getCats);
        catRouter.get("/:catNumber", ApiCatController.getCat);

        return catRouter;
    }
}

module.exports = GoodCatRouter;
