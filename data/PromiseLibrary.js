const catRepository = require("./catRepository");

/**
 * So a Promise is another way of doing asynchronous code.
 * 
 * A Promise takes a function which take a resolve and reject method.
 * 
 * Depending on circumstances you will either pass data back from a promise
 * with resolve(data), or cause the promise to error with reject(error).
 */

class PromiseLibrary {

    getCats() {
        /**
         * If you know you are always going to resolve you can just do
         * Promise.resolve instead of
         * new Promise((resolve) => resolve(catRepository))
         */
        return Promise.resolve(catRepository);
    }

    getCat(id) {
        return new Promise((resolve, reject) => {

            const cat = catRepository[id];

            if (cat === undefined) {
                /**
                 * We are rejecting this promise because the cat doesn't exist!
                 */
                return reject("Cat does not exist!");
            }

            return resolve(catRepository[id]);
        });
    }
}

module.exports = PromiseLibrary;
