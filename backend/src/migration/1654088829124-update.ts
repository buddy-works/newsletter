import { MigrationInterface, QueryRunner } from "typeorm";

export class update1654088829124 implements MigrationInterface {
    name = 'update1654088829124'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" ADD "name" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "name"`);
    }

}
