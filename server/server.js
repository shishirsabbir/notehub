// setup config
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// imports
const app = require('./app');
const mongoose = require('mongoose');

// db setup
// const DB = process.env.DB_CLOUD.replace('<PASSWORD>', process.env.DB_PASSWORD);

// for local db
const DB = process.env.DB_LOCAL;
mongoose
    .connect(DB)
    .then(() => {
        console.log('Database Connected! ✅');
    })
    .catch((err) => {
        console.log('Database Connection Error! 💥');
        console.error(err);
    });

// starting the server
const PORT = process.env.API_PORT;
app.listen(PORT, () => {
    console.log(`Listening from port ${PORT}...`);
});
