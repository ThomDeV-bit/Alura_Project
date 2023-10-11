import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1697052902505 implements MigrationInterface {
    name = 'Migrations1697052902505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`itens_by_order\` (\`id\` varchar(36) NOT NULL, \`quantidade\` int NOT NULL, \`precoVenda\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`orderId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`orders\` (\`id\` varchar(255) NOT NULL, \`valor_total\` int NOT NULL, \`status\` enum ('em_processamento', 'processado', 'cancelado') NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`usuarioId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`mail\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_2e5b50f4b7c081eceea476ad12\` (\`mail\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`itens_by_order\` ADD CONSTRAINT \`FK_d349de0a6f04506ec8ae208dde4\` FOREIGN KEY (\`orderId\`) REFERENCES \`orders\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_4c031d2198d28f09c6e75836d37\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_4c031d2198d28f09c6e75836d37\``);
        await queryRunner.query(`ALTER TABLE \`itens_by_order\` DROP FOREIGN KEY \`FK_d349de0a6f04506ec8ae208dde4\``);
        await queryRunner.query(`DROP INDEX \`IDX_2e5b50f4b7c081eceea476ad12\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`orders\``);
        await queryRunner.query(`DROP TABLE \`itens_by_order\``);
    }

}
