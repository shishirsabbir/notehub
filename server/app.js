// imports
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRouter = require('./routers/userRouter');
const noteRouter = require('./routers/noteRouter');
const authController = require('./controllers/authController');

// express app
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// mounting router
app.use('/api/v1/notes', authController.authorize, noteRouter);
app.use('/api/v1/users', userRouter);

// global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    // error output
    console.error(err);

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

// exports
module.exports = app;
