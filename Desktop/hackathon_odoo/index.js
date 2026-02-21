
require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const session = require("express-session");

app.use(
    session({
        secret: process.env.SECRET_KEY, // Replace with a secure key
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }, // Changed to false for localhost HTTP
    })
);

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "odoo_hackathon",
    password: process.env.DATABSE_PASSWORD
});


let port = 9001;

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Connected to database");
});

app.listen(port, () => {
    console.log("Server running on ", port);
});
