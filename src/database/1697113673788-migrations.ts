import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1697113673788 implements MigrationInterface {
    name = 'Migrations1697113673788'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`categories\` (\`id\` varchar(255) NOT NULL, \`categorie\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_image\` (\`id\` varchar(255) NOT NULL, \`image\` blob NOT NULL, \`imageProdutoId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_characteristics\` (\`id\` varchar(255) NOT NULL, \`nome\` varchar(100) NOT NULL, \`descricao\` varchar(100) NOT NULL, \`produtoId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` varchar(36) NOT NULL, \`usuario_id\` varchar(100) NOT NULL, \`nome\` varchar(100) NOT NULL, \`valor\` int NOT NULL, \`quantidade\` int NOT NULL, \`productsByOrderId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`itens_by_order\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`itens_by_order\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`itens_by_order\` ADD \`id\` varchar(255) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`product_image\` ADD CONSTRAINT \`FK_e4946d4de4e4cc2cf2343c74b76\` FOREIGN KEY (\`imageProdutoId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_characteristics\` ADD CONSTRAINT \`FK_3c38eece34ae43a58a3094ddd4e\` FOREIGN KEY (\`produtoId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_69e7751796935b6560b46a9a2d9\` FOREIGN KEY (\`productsByOrderId\`) REFERENCES \`itens_by_order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_69e7751796935b6560b46a9a2d9\``);
        await queryRunner.query(`ALTER TABLE \`product_characteristics\` DROP FOREIGN KEY \`FK_3c38eece34ae43a58a3094ddd4e\``);
        await queryRunner.query(`ALTER TABLE \`product_image\` DROP FOREIGN KEY \`FK_e4946d4de4e4cc2cf2343c74b76\``);
        await queryRunner.query(`ALTER TABLE \`itens_by_order\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`itens_by_order\` ADD \`id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`itens_by_order\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP TABLE \`product_characteristics\``);
        await queryRunner.query(`DROP TABLE \`product_image\``);
        await queryRunner.query(`DROP TABLE \`categories\``);
    }

}
