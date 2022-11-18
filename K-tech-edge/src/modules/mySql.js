const mySql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const pool = mySql.createPool({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

async function CreateUser(pool){
    try {
        await pool.query('INERT INTO users`()`')

    } catch (error) {
        
    }
}