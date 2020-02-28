const express = require("express");
const FatCatController = require("../controllers/FatCatController")

class CatRouter {

    static initRoutes () {

        const catRouter = express.Router();

        catRouter.get("/", FatCatController.getCats);
        catRouter.get("/add-cat", FatCatController.getAddCat);
        catRouter.post("/add-cat", FatCatController.postAddCat);
        catRouter.get("/:catNumber", FatCatController.getCat); // This has to be last!

        return catRouter;
    }
}

module.exports = CatRouter;
