import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

export const pool = mysql
    .createPool({
        host: "sql.freedb.tech",
        port: 3306,
        user: "freedb_qwera",
        password: "rn@25VpJa?epTVa",
        database: "freedb_users_app",
    })
    .promise();
