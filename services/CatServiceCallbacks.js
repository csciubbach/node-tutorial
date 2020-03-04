const CallbackLibrary = require("../data/CallbackLibrary");

class CatServiceCallbacks {

    catRepo = new CallbackLibrary();

    getCats(done) {
        return this.catRepo.getCats(done);
    }

    getCat(id, done) {
        return this.catRepo.getCat(id, done);
    }
}

module.exports = CatServiceCallbacks;
