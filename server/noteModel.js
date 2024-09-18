// imports
const mongoose = require('mongoose');

// note schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'note title is required!'],
        unique: true,
        lowercase: true,
        trim: true,
        maxLength: [50, 'note title should be equal or less then 50 chars!'],
    },
    description: {
        type: String,
        require: [true, 'note details or description is required!'],
        maxLength: [700, 'note desc should be around 500 chars'],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

// note model
const Note = mongoose.model('Note', noteSchema);

// exports
module.exports = Note;
