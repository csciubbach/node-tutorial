const PromiseLibrary = require("./PromiseLibrary");

class CatServicePromises {

    catRepo = new PromiseLibrary();

    getCats() {
        return this.catRepo.getCats();
    }

    getCat(id) {
        return this.catRepo.getCat(id);
    }
}

module.exports = CatServicePromises;
