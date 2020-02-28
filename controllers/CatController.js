const catRepository = require("../data/catRepository");

/**
 * Now we have a separation of concerns. We can test this on its own.
 * 
 * It is just a collection of functions which take a request and do
 * something with a response.
 */

class CatController {

    static getCats(_request, response) {
        return response.send(catRepository);
    }

    static getCat(request, response) {

        const cat = catRepository[request.params.catNumber];

        return response.send(cat);
    }
}

module.exports = CatController;
