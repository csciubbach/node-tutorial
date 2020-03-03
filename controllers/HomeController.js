class HomeController {

    static getIndex(_request, response) {

        return response.render("index", {
            title: "Wow",
            message: "Hello, world!"
        });
    }
}

module.exports = HomeController;
