// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");




describe('./musicians endpoint', () => {
    // Write your tests here
    test("Testing /musicians endpoint", async () =>{
        const response = await request(app).get("/musicians");
        expect(response.ok).toBe(true);
        expect(response.type).toBe("application/json");
    })
    test("Testing /musicians/:id endpoint", async () => {
        const response = await request(app).get("/musicians/1");
        expect(response.ok).toBe(true);
        expect(response.type).toBe("application/json");
    })
    test("Testing /musicians POST endpoint", async () => {
        const response = await request(app).post("/musicians");
        expect(response.ok).toBe(true);
        expect(response.type).toBe("application/json");
    })
    test("Testing /musicians PUT endpoint", async () => {
        const response = await request(app).put("/musicians/1");
        expect(response.ok).toBe(true);
        expect(response.type).toBe("application/json");
    })
    test("Testing /musicians DELETE endpoint", async () => {
        const response = await request(app).delete("/musicians/1");
        expect(response.ok).toBe(true);
    })
})
