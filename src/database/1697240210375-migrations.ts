import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1697240210375 implements MigrationInterface {
    name = 'Migrations1697240210375'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`categories\` (\`id\` varchar(255) NOT NULL, \`categorie\` varchar(255) NOT NULL, \`produtoId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_image\` (\`id\` varchar(255) NOT NULL, \`image\` blob NOT NULL, \`imageProdutoId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_characteristics\` (\`id\` varchar(255) NOT NULL, \`nome\` varchar(100) NOT NULL, \`descricao\` varchar(100) NOT NULL, \`produtoId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` varchar(36) NOT NULL, \`usuario_id\` varchar(100) NOT NULL, \`nome\` varchar(100) NOT NULL, \`valor\` int NOT NULL, \`quantidade\` int NOT NULL, \`productsByOrderId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`itens_by_order\` (\`id\` varchar(255) NOT NULL, \`quantidade\` int NOT NULL, \`precoVenda\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`orderId\` varchar(36) NULL, \`productsId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`orders\` (\`id\` varchar(255) NOT NULL, \`valor_total\` int NOT NULL, \`status\` enum ('em_processamento', 'processado', 'cancelado') NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`usuarioId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`mail\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_2e5b50f4b7c081eceea476ad12\` (\`mail\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`categories\` ADD CONSTRAINT \`FK_2cbe5690ddca86ae6778264d1ba\` FOREIGN KEY (\`produtoId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_image\` ADD CONSTRAINT \`FK_e4946d4de4e4cc2cf2343c74b76\` FOREIGN KEY (\`imageProdutoId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_characteristics\` ADD CONSTRAINT \`FK_3c38eece34ae43a58a3094ddd4e\` FOREIGN KEY (\`produtoId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_69e7751796935b6560b46a9a2d9\` FOREIGN KEY (\`productsByOrderId\`) REFERENCES \`itens_by_order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`itens_by_order\` ADD CONSTRAINT \`FK_d349de0a6f04506ec8ae208dde4\` FOREIGN KEY (\`orderId\`) REFERENCES \`orders\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`itens_by_order\` ADD CONSTRAINT \`FK_c35af05313067bea8a2c285eadc\` FOREIGN KEY (\`productsId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_4c031d2198d28f09c6e75836d37\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_4c031d2198d28f09c6e75836d37\``);
        await queryRunner.query(`ALTER TABLE \`itens_by_order\` DROP FOREIGN KEY \`FK_c35af05313067bea8a2c285eadc\``);
        await queryRunner.query(`ALTER TABLE \`itens_by_order\` DROP FOREIGN KEY \`FK_d349de0a6f04506ec8ae208dde4\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_69e7751796935b6560b46a9a2d9\``);
        await queryRunner.query(`ALTER TABLE \`product_characteristics\` DROP FOREIGN KEY \`FK_3c38eece34ae43a58a3094ddd4e\``);
        await queryRunner.query(`ALTER TABLE \`product_image\` DROP FOREIGN KEY \`FK_e4946d4de4e4cc2cf2343c74b76\``);
        await queryRunner.query(`ALTER TABLE \`categories\` DROP FOREIGN KEY \`FK_2cbe5690ddca86ae6778264d1ba\``);
        await queryRunner.query(`DROP INDEX \`IDX_2e5b50f4b7c081eceea476ad12\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`orders\``);
        await queryRunner.query(`DROP TABLE \`itens_by_order\``);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP TABLE \`product_characteristics\``);
        await queryRunner.query(`DROP TABLE \`product_image\``);
        await queryRunner.query(`DROP TABLE \`categories\``);
    }

}
