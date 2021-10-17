const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "nara305698",
    post: 5432,
    database: "people"
});

module.exports = pool;