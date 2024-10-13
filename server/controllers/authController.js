// imports
const JWT = require('jsonwebtoken');
const User = require('./../models/userModel');
const AppError = require('./../utilities/appError');
const { promisify } = require('util');

// signup
// eslint-disable-next-line no-unused-vars
const signUp = async (req, res, next) => {
    try {
        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
        });

        newUser.password = undefined;

        res.status(201).json({
            status: 'success',
            data: {
                user: newUser,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message,
        });
    }
};

// login
const login = async (req, res, next) => {
    try {
        const loginInfo = req.body;

        // 1) check if email or username and password exists
        if ((!loginInfo.email && !loginInfo.userName) || !loginInfo.password) {
            return next(
                new AppError('username or email and password is required!', 400)
            );
        }

        // 2) check if email or username exists
        let user;

        if (!loginInfo.email) {
            user = await User.findOne({ userName: loginInfo.userName }).select(
                '+password'
            );
        }

        if (!loginInfo.userName) {
            user = await User.findOne({ email: loginInfo.email }).select(
                '+password'
            );
        }

        // 3) check if user exists and password is correct
        if (!user || !user.correctPassword(loginInfo.password, user.password)) {
            return next(
                new AppError('incorrect username or email or password', 401)
            );
        }

        // 3-Extra) removing password from the user object
        user.password = undefined;

        // 4) if everything is okay, send token
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        // 5) sending token as cookie
        /*
        const cookieOptions = {
            expires: new Date(
                Date.now() +
                    process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
            secure: false, // when in production should be true
        };

        res.cookie('Token', token, cookieOptions);
        */

        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
            token,
        });
    } catch (err) {
        next(new AppError(err.message, 500));
    }
};

// authorization handler
const authorize = async (req, res, next) => {
    // 1) getting token and check if it's there
    let token;

    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.cookies.Token;
    } else {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new AppError('login required to access this route', 401));
    }

    // 2) Verify token
    const verifyJWT = promisify(JWT.verify);
    const decoded = await verifyJWT(token, process.env.JWT_SECRET);

    // 3) check if user is still exists (will implement later)
    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
        return next(new AppError('user does not exists!', 401));
    }

    // 4) check if user changed password after token issued (will implement later)
    // 5) grant access & calling next
    req.currentUser = currentUser;
    next();
};

// exports
module.exports = {
    signUp,
    login,
    authorize,
};
