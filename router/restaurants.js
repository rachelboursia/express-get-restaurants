const express = require("express");
const router = express.Router();
const {Restaurant} = require("../models/index");
const seedRestaurant = require("../seedData");
const {check, validationResult} = require("express-validator");

router.get("/", async (req, res) => {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
});

router.get("/:id", async (req, res) => {
    const RestaurantId = await Restaurant.findByPk(req.params.id);
    res.json(RestaurantId);
});

router.post("/", async (req, res) => {
    const newRestaurant = await Restaurant.create(
    {   name: req.body.name,
        location: req.body.location,
        cuisine: req.body.cuisine  }
    );
    res.json(newRestaurant);
});

router.patch("/:id", async (req, res) => {
    const RestaurantId = await Restaurant.findByPk(req.params.id);
    RestaurantId.name = req.body.name;
    RestaurantId.location = req.body.location;
    RestaurantId.cuisine = req.body.cuisine;
    await RestaurantId.save();
    res.json(RestaurantId);
});

router.delete("/:id", async (req, res) => {
    const RestaurantId = await Restaurant.findByPk(req.params.id);
    await RestaurantId.destroy();
    res.json({message: "Restaurant Deleted"});
});

module.exports = router;