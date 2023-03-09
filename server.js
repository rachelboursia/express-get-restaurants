const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

//TODO: Create your GET Request Route Below

        // Part 1: 
app.get("/restaurants", (req, res) => {
    Restaurant.findAll().then(restaurant => {
        res.json(restaurant);
    });
});
        // Part 2: 
app.get("/restaurants/:id", (req, res) => {
    Restaurant.findByPk(req.params.id).then(restaurant => {
        res.json(restaurant);
    });
});

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})