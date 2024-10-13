// imports
const Note = require('./../models/noteModel');
const AppError = require('./../utilities/appError');

// controllers
const getAllNotes = async (req, res, next) => {
    try {
        const notes = await Note.find({ author: req.currentUser._id });

        res.status(200).json({
            status: 'success',
            results: notes.length,
            data: {
                notes,
            },
        });
    } catch (err) {
        next(new AppError(err.message, 500));
    }
};

const getNote = async (req, res, next) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return next(
                new AppError(`note not found with id ${req.params.id}`, 404)
            );
        }

        res.status(200).json({
            status: 'success',
            data: {
                note,
            },
        });
    } catch (err) {
        next(new AppError(err.message, 500));
    }
};

const createNote = async (req, res, next) => {
    try {
        const newNote = await Note.create({
            title: req.body.title,
            description: req.body.description,
            author: req.currentUser._id,
        });

        if (!newNote) {
            return next(
                new AppError(`note not found with id ${req.params.id}`, 404)
            );
        }

        // console.log(req.body);
        // console.log(newNote);

        res.status(201).json({
            status: 'success',
            data: {
                note: newNote,
            },
        });
    } catch (err) {
        next(new AppError(err.message, 500));
    }
};

const updateNote = async (req, res, next) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
            },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedNote) {
            next(new AppError(`note not found with id ${req.params.id}`, 404));
        }

        res.status(200).json({
            status: 'success',
            data: {
                note: updatedNote,
            },
        });
    } catch (err) {
        next(new AppError(err.message, 500));
    }
};

const deleteNote = async (req, res, next) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) {
            next(new AppError(`note not found with id ${req.params.id}`, 404));
        }

        res.status(204).json({
            status: 'success',
            data: {
                note,
            },
        });
    } catch (err) {
        next(new AppError(err.message, 500));
    }
};

// exports
module.exports = {
    getAllNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote,
};
