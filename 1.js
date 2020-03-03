/**
 * Associated files
 * .
 * └── 1.js
 */

const express = require("express");

const app = express();

/**
 * Nothing going on here except for a http server starting on port 3001
 */

app.listen(3001, function () {
    console.log("I'm listening!");
});
