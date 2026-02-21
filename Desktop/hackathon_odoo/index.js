
require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const session = require("express-session");
const crypto =  require('crypto');
const nodemailer = require('nodemailer');

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//helper functions 
//helper function to generate otp 
function generate_otp(){
    const min = Math.pow(10, 6 - 1);
    const max = Math.pow(10, 6) - 1;

    const otp = crypto.randomInt(min, max + 1);
    return otp.toString();
}

//helper function that actually sends the mail to the user
async function send_mail(email){
    let otp = generate_otp();
    let transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com', // Brevo's official SMTP server
        port: 587, // Standard port for SMTP (TLS)
        auth: {
            user: '7virajb@gmail.com.com', // Your Brevo login email address
            pass: process.env.SMTP_KEY // Your actual Brevo SMTP Key
        }
    });

    let mailOptions = {
    from: '"My Logistics App" <7virajb@gmail.com>',
    to: email,
    subject: 'Your OTP Verification Code',
    text: `Your OTP is ${otp}`,
    html: `<p>Your security code is: <strong>${otp}</strong></p>`
    };

    await transporter.sendMail(mailOptions);
}

//helper function that hashes the password 



app.listen(port, () => {
    console.log("Server running on ", port);
});
