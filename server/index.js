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
            "INSERT INTO employees (firstName, lastName, email, password, inPayroll, status, locked) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [firstName, lastName, email, password, inPayroll, status, locked]
        );
        res.json(newEmployee.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all employees
app.get("/employees", async (req, res) => {
    try {
        const allEmployees = await pool.query("SELECT * FROM employees");
        res.json(allEmployees.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get an employee by id
app.get("/employees/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await pool.query("SELECT * FROM employees WHERE id = $1", [id]);
        res.json(employee.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// update an employee
app.put("/employees/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, password, inPayroll, status, locked } = req.body;
        const updatedEmployee = await pool.query

    }
    catch (err) {}
})
// delete an employee

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

