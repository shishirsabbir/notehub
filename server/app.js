// imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const noteController = require("./noteController");

// express app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.get("/notes", noteController.getAllNotes);
app.post("/notes", noteController.createNote);
app.get("/notes/:id", noteController.getNote);

// exports
module.exports = app;
