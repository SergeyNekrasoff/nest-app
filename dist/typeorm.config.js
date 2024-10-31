"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const db_connection_1 = require("./db.connection");
const AppDataSource = new typeorm_1.DataSource({
    ...db_connection_1.default,
    entities: ["*/**/*.entity.ts"],
    migrations: ["src/migrations/*.ts"]
});
AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
exports.default = AppDataSource;
//# sourceMappingURL=typeorm.config.js.map