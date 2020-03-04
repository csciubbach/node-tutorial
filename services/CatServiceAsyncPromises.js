const PromiseLibrary = require("../data/PromiseLibrary");

class CatServiceAsyncPromises {

    catRepo = new PromiseLibrary();

    async getCats() {
        return await this.catRepo.getCats();
    }

    async getCat(id) {
        return await this.catRepo.getCat(id);
    }
}

module.exports = CatServiceAsyncPromises;
