import { join } from "path";
import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
  type: "sqlite",
  database: "db",
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  migrations: [join(__dirname, "/../../", "database/migrations/**/*{.ts,.js}")],
  synchronize: false,
  migrationsTableName: "typeorm_migrations",
  migrationsRun: false,
});
