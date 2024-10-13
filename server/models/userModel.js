// imports
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

// user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'firstname is required!'],
        lower: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'lastname is required!'],
        lowercase: true,
        trim: true,
    },
    userName: {
        type: String,
        trim: true,
        required: [true, 'username is required!'],
    },
    email: {
        type: String,
        required: [true, 'user email address is required!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'valid email required!'],
    },
    password: {
        type: String,
        required: [true, 'password is required!'],
        minLength: 8,
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'password confirmation is required!'],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: 'password are not the same!',
        },
    },
    // passwordToken: {
    //     type: String,
    // },
});

// mongoose middlewares
userSchema.pre('save', async function (next) {
    // hash the password with cost of 10
    this.password = await bcrypt.hash(this.password, 10);

    // delete passwordConfirm field
    this.passwordConfirm = undefined;

    // calling the next middleware function
    next();
});

// mongoose instance methods
userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

// user model
const User = mongoose.model('User', userSchema);

// exports
module.exports = User;
