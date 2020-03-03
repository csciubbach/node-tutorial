const catRepository = require("../data/catRepository");

class CatService {

    _getCats(done) {

        // Simulate asynchronous call
        process.nextTick(function () {
            done(undefined, catRepository);
        });
    }

    _getCat(id, done) {

        // Simulate asynchronous call
        process.nextTick(function () {

            const cat = catRepository[id];

            let error;

            if (cat === undefined) {
                error = "Cat does not exist!";
            }

            return done(error, catRepository[id]);
        });
    }

    getCats(done) {
        return this._getCats(function (error, cats) {
            return done(error, cats);
        });
    }

    getCat(id, done) {
        return this._getCat(id, function (error, cat) {
            return done(error, cat);
        });
    }
}

module.exports = CatService;
