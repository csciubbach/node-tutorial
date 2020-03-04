const express = require("express");
const AsyncCatController = require("../controllers/AsyncCatController")

class AsyncCatRouter {

    static initRoutes () {

        const catRouter = express.Router();

        catRouter.get("/", AsyncCatController.getCats);
        catRouter.get("/add-cat", AsyncCatController.getAddCat);
        catRouter.post("/add-cat", AsyncCatController.postAddCat);
        catRouter.get("/:catNumber", AsyncCatController.getCat);

        return catRouter;
    }
}

module.exports = AsyncCatRouter;
