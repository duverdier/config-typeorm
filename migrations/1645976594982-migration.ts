import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1645976594982 implements MigrationInterface {
    name = 'migration1645976594982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying(255), "last_name" character varying(255), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying(255), "last_name" character varying(255), "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying(255) NOT NULL, "description" text NOT NULL, "file_name" character varying(255), "views" integer, "isPublished" boolean NOT NULL, "userId" uuid, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "photo" ADD CONSTRAINT "FK_4494006ff358f754d07df5ccc87" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo" DROP CONSTRAINT "FK_4494006ff358f754d07df5ccc87"`);
        await queryRunner.query(`DROP TABLE "photo"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
