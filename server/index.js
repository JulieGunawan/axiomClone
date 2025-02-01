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
     
        const newInfo = req.body;

        if (Object.keys(newInfo).length === 0) {
            return res.status(400).json({ error: "No information provided" });
        }

        let values=[];
        let columns=[];
        let count =1;
        let placeholder=[];

        for (const key in newInfo){
            columns.push(key);
            placeholder.push(`$${count}`);
            values.push(newInfo[key]);
            count++;
        }

        let query = `INSERT INTO employees (${columns.join(", ")}) VALUES (${placeholder.join(", ")}) RETURNING *`;
        const newEmployee = await pool.query(query,values);
        res.json(newEmployee.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Error creating an employee" });
    }
});

// get all employees
app.get("/employees", async (req, res) => {
    try {
        const allEmployees = await pool.query("SELECT * FROM employees");
        res.json(allEmployees.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Error getting all employees" });
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
        res.status(500).json({ error: "Error updating employee" });
    }
})

// update an employee
app.put("/employees/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedValue = req.body;
        let values = [];
        let query = "UPDATE employees SET ";
        let count =1;
        for (const key in updatedValue){
            query += `${key} = $${count},`;
            values.push(updatedValue[key]);
            count++;
        }
        query = query.slice(0, -1) + ` WHERE id = $${count} RETURNING *`;
        values.push(id);
        const updatedEmployee = await pool.query(query, values);
        res.json(updatedEmployee);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Error updating employee" });
    }
})
// delete an employee
app.delete("/employees/:id", async (req, res) => {
    try {
        const {id} = req.params;
        let query = "DELETE FROM employees WHERE id = $1 RETURNING *";
        const deletedEmployees = await pool.query(query, [id]);

        console.log(deletedEmployees);
        if (deletedEmployees.rows.length === 0) {
            return res.status(404).json({ error: "Employee not found" });
        }
        res.json(deletedEmployees.rows[0]);
    }catch(err) {
        console.error(err.message);
        res.status(500).json({ error: "Error deleting employee" });
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

