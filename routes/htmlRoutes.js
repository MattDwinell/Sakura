var path = require("path");

module.exports = function(app) {
    app.get("/", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/html/index.html"));
    });
    app.get("/about", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/html/about.html"));
    });
    app.get("/profile", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/html/profile.html"));
    });
};