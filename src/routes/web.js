import express from 'express';

let router = express.Router();

let webRoute = (app) => {
    router.get("/", (req, res) => {
        res.send("Hello World");
    });

    return app.use("/", router);
}

module.exports = webRoute;