import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

export const pool = mysql
    .createPool({
        host: "sql7.freesqldatabase.com",
        port: 3306,
        user: "sql7768912",
        password: "hsB5i9TYqV",
        database: "sql7768912",
    })
    .promise();
