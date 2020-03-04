const catRepository = require("../data/catRepository");
const CatServiceAsyncPromises = require("../services/CatServiceAsyncPromises");
catService = new CatServiceAsyncPromises();

class AsyncCatController {

    static async getCats(_request, response) {

        const cats = await catService.getCats();

        return response.render("cats/index", {
            cats: cats
        });
    }

    static async getCat(request, response) {

        try {

            const cat = await catService.getCat(request.params.catNumber);
    
            return response.send(cat);

        } catch (error) {
            return response.send(error);
        }
    }

    static getAddCat(_request, response) {
        return response.render("cats/addCat", {
            title: "Add new cat"
        });
    }

    static postAddCat(request, response) {

        catRepository.push(request.body.cat);

        return response.redirect("/cats");
    }
}

module.exports = AsyncCatController;
