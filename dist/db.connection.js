"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const CONNECTION = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE,
};
exports.default = CONNECTION;
//# sourceMappingURL=db.connection.js.map