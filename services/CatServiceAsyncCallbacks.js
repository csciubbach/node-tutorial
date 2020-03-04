const CallbackLibrary = require("../data/CallbackLibrary");
const { promisify } = require("util");

class CatServiceAsyncCallbacks {

    constructor() {
        this.catRepo = new CallbackLibrary();
        this.getCats = promisify(this.catRepo.getCats);
        this.getCat = promisify(this.catRepo.getCat);
    }

    async getCats() {
        return await this.getCats();
    }

    async getCat(id) {
        return await this.getCat(id);
    }
}

module.exports = CatServiceAsyncCallbacks;
