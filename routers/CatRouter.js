const express = require("express");
const CatController = require("../controllers/CatController")

class CatRouter {

    static create() {

        const catRouter = express.Router();

        catRouter.get("/", CatController.getCats);
        catRouter.get("/add-cat", CatController.getAddCat);
        catRouter.post("/add-cat", CatController.postAddCat);
        catRouter.get("/:catNumber", CatController.getCat); // This has to be last!

        return catRouter;
    }
}

module.exports = CatRouter;
