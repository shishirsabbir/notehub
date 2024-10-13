// imports
const express = require('express');
const noteController = require('./../controllers/noteController');

// express router
const router = express.Router();

// note routes
router
    .route('/')
    .get(noteController.getAllNotes)
    .post(noteController.createNote);

router
    .route('/:id')
    .get(noteController.getNote)
    .patch(noteController.updateNote)
    .delete(noteController.deleteNote);

// exports
module.exports = router;
