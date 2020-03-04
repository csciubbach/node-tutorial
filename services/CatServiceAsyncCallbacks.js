const CallbackLibrary = require("./CallbackLibrary");
const { promisify } = require("util");

class CatServiceAsyncCallbacks {

    constructor() {
        this.catRepo = new CallbackLibrary();
        this.getCats = promisify(catRepo.getCats);
        this.getCat = promisify(catRepo.getCat);
    }

    async getCats() {
        return await this.getCats();
    }

    async getCat(id) {
        return await this.getCat(id);
    }
}

module.exports = CatServiceAsyncCallbacks;
