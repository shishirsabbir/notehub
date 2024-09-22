// imports
const jwt = require("jsonwebtoken");
const User = require("./../models/userModel");

// signing function
const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

// auth controller functions
const signUp = async function (req, res, next) {
    try {
        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
        });

        const token = signToken(newUser._id);
        const cookieOptions = {
            expires: new Date(
                Date.now() +
                    process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
        };

        if (process.env.NODE_ENV === "production") {
            cookieOptions.secure = true;
        }

        // remove password from output
        newUser.password = undefined;

        res.status(201).json({
            status: "success",
            token,
            data: {
                user: newUser,
            },
        });
    } catch (err) {
        console.error(err);
        next();
    }
};
