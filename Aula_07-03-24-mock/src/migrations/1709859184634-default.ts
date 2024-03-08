import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1709859184634 implements MigrationInterface {
    name = 'Default1709859184634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "fabricantes" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar(30) NOT NULL, CONSTRAINT "UQ_a98e025b09c535ccc497e55c50d" UNIQUE ("nome"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fabricantes"`);
    }

}
