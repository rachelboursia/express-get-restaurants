const express = require("express");
const app = express();
const {sequelize} = require("./db");
const restaurant = require("./router/restaurants");

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/restaurants", restaurant)

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})