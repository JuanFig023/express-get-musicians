const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get("/musicians", async (req,res) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
})

app.get("/musicians/:id", async (req,res) => {
    const musicianPerId = await Musician.findByPk(req.params.id);
    res.json(musicianPerId);
})

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.post("/musicians", async (req,res) => {
    const newMusician = await Musician.create(req.body);
    res.json(newMusician);
})

app.put("/musicians/:id", async (req,res) => {
    const musicianUpdated = await Musician.findByPk(req.params.id);
    await musicianUpdated.update(req.body);
    res.json(musicianUpdated);
})

app.delete("/musicians/:id", async (req,res) => {
    const musicianDeleted = await Musician.findByPk(req.params.id);
    await musicianDeleted.destroy()
})

module.exports = app;