// require the Express module
const express = require("express");
//creates a new router object
const todoRoute = express.Router();
//this is connecting to the database
const pool = require("./connection")

const todoItems = [];


todoRoute.get("/todo-items", (req, res) => {
    pool.query("SELECT*FROM todo_list").then((result) => {
        console.log(result.rows);
        res.json(result.rows);
    })

});

module.exports = { todoRoute };
