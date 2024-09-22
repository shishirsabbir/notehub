// imports
const Note = require("./..models/noteModel");

// controllers
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();

        res.status(200).json({
            status: "success",
            results: notes.length,
            data: {
                notes,
            },
        });
    } catch (err) {
        console.log(err);

        res.status(504).json({
            status: "error",
            message: "Error! Check your console",
        });
    }
};

const getNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                note,
            },
        });
    } catch (err) {
        console.log(err);

        res.status(504).json({
            status: "error",
            message: "Error! Check your console",
        });
    }
};

const createNote = async (req, res) => {
    try {
        const newNote = await Note.create({
            title: req.body.title,
            description: req.body.description,
        });

        if (!newNote) {
            return res.status(504).json({
                status: "failed",
                message: "there is an error creating notes",
            });
        }

        // console.log(req.body);
        // console.log(newNote);

        res.status(201).json({
            status: "success",
            data: {
                note: newNote,
            },
        });
    } catch (err) {
        console.log(err);

        res.status(504).json({
            status: "error",
            message: "Error! Check your console",
        });
    }
};

// exports
module.exports = {
    getAllNotes,
    getNote,
    createNote,
};
