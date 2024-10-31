import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Auto1729664028996 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
