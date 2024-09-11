import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePokemons1726031081492 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO creature VALUES (
      "pokemon-2",
      "Charmander",
      4,
      3, 
      3,
      4,
      "Type",
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"
      )`,
    );
    await queryRunner.query(
      `INSERT INTO creature VALUES (
      "pokemon-3",
      "Squirtle",
      3,
      4, 
      3,
      3,
      "Type",
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
      )`,
    );
    await queryRunner.query(
      `INSERT INTO creature VALUES (
      "pokemon-4",
      "Bulbasur",
      4,
      3, 
      3,
      3,
      "Type",
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
      )`,
    );
    await queryRunner.query(
      `INSERT INTO creature VALUES (
      "pokemon-5",
      "Eevee",
      4,
      3, 
      4,
      5,
      "Type",
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM creature WHERE id = "pokemon-2"`);
    await queryRunner.query(`DELETE FROM creature WHERE id = "pokemon-3"`);
    await queryRunner.query(`DELETE FROM creature WHERE id = "pokemon-4"`);
    await queryRunner.query(`DELETE FROM creature WHERE id = "pokemon-5"`);
  }
}
