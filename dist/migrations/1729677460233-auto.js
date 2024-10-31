"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto1729677460233 = void 0;
class Auto1729677460233 {
    constructor() {
        this.name = 'Auto1729677460233';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.Auto1729677460233 = Auto1729677460233;
//# sourceMappingURL=1729677460233-auto.js.map