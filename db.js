/** Database for lunchly */

const pg = require("pg");
// Need to create password file before running
const password = require("./secretpassword")
const db = new pg.Client({
    user: 'thisisfoobar',
    host: 'localhost',
    database: 'lunchly',
    password: password,
    port: 5432
});

db.connect();

module.exports = db;
