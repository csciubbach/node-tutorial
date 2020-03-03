const catRepository = require("../data/catRepository");

class CatController {

    static getCats(_request, response) {
        return response.render(
            "cats/index",
            {
                cats: catRepository
            }
        );
    }

    static getCat(request, response) {

        const cat = catRepository[request.params.catNumber];

        return response.send(cat);
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

module.exports = CatController;
