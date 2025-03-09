import express from "express";

let viewEngine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
    app.use(express.static("./src/public"));
}

module.exports = viewEngine;