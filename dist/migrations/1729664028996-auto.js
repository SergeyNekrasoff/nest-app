"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto1729664028996 = void 0;
class Auto1729664028996 {
    constructor() {
        this.name = 'Auto1729664028996';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "isActive" boolean NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.Auto1729664028996 = Auto1729664028996;
//# sourceMappingURL=1729664028996-auto.js.map