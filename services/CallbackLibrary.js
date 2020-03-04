const catRepository = require("../data/catRepository");

class CallbackLibrary {

    getCats(done) {

        /**
         * JavaScript is single threaded, so when we do an operation we have to wait for
         * like disk access, network, database etc, we do it asynchronously and use a callback
         * which is a function called when an event triggers saying the operation is complete.
         * 
         * If we did it synchronously our entire application would have to wait.
         * 
         * process.nextTick will execute the provided function asynchronously. We can use it
         * to demonstrate callbacks.
         */
        return process.nextTick(function () {

            /**
             * The convention with callbacks is to return the first argument as an error
             * (undefined if there is no error) and the second argument as the value.
             */
            return done(undefined, catRepository);
        });

        /**
         * These lines will execute before the function above so it is best
         * practice to return the above function to prevent anyone trying to
         * write code here thinking it will continue executing normally.
         */
    }

    getCat(id, done) {

        return process.nextTick(function () {

            const cat = catRepository[id];

            let error;

            if (cat === undefined) {
                error = "Cat does not exist!";
            }

            /**
             * Here we may have an error, which will need to be checked for
             * where we are calling this!
             */
            return done(error, catRepository[id]);
        });
    }
}

module.exports = CallbackLibrary;
