const express = require("express");
const HomeController = require("../controllers/HomeController")

class HomeRouter {

    static initRoutes () {

        const homeRouter = express.Router();

        homeRouter.get("/", HomeController.getIndex);

        return homeRouter;
    }
}

module.exports = HomeRouter;
