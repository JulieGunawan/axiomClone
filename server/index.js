const express = require("express");
const app = express();
const port = 5000;
const pool = require("./db");

const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// routes

// create an employee

app.post("/employees", async (req, res) => {
    try {
        const { firstName, lastName, email, password, inPayroll, status, locked } = req.body;
        const newEmployee = await pool.query(
            "INSERT INTO employees (firstName, lastName, email, password, inPayroll, status, locked) VALUES($1, $2, $3, $4, $5, $6, $7)",
            [firstName, lastName, email, password, inPayroll, status, locked]
        );
        res.json(newEmployee);
    } catch (err) {
        console.error(err.message);
    }
});

// get all employees
app.get("employees", async (req, res) => {
    try {
        const allEmployees = await pool.query("SELECT * FROM employees");
        res.json(allEmployees.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get an employee by id

// update an employee

// delete an employee

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

