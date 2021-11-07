const pool = require("../database/db");
const bcrypt = require("bcrypt");
const express = require("express");
const jwtGenerator = require("../database/utils/jwtGenerator");

const router = require("express").Router();


router.post("/register", async (req, res) => {
    const {username, pwd} = req.body;
    try {
        const user = await pool.query ("SELECT * FROM users WHERE username = $1", [username]);

        if (user.rows.length > 0) {
            return res.status(401).json("User already exist!");
        };

        const salt = await bcrypt.genSalt(10);
        const bcryptPwd = await bcrypt.hash(pwd, salt);

        let newUser = await pool.query(
            "INSERT INTO users (username, pwd) VALUES ($1, $2) RETURNING *",
            [username, bcryptPwd]
          );
      
          const jwtToken = jwtGenerator(newUser.rows[0].id);
      
          return res.json({ jwtToken }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

router.post("/login", async(req, res) => {

    const {username, pwd} = req.body;

    try {
    
        const user = await pool.query("SELECT * FROM users WHERE username = $1", [username]);

        if (user.rows.length === 0) {
            return res.status(401).send("password or username incorrect");
        };
        
        const validPwd = await bcrypt.compare(
            pwd,
            user.rows[0].pwd
          );

        if (!validPwd) {
            return res.status(401).json("Invalid Credential");
          }

        const jwtToken = jwtGenerator(user.rows[0].id);
        return res.json({ jwtToken });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");

    }
});



module.exports = router;