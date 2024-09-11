import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreaturesModule } from "./creatures/creatures.module";
import { BattlesModule } from "./battle/battles.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      migrations: [__dirname + "/migrations/*{.ts,.js}"],
      synchronize: true,
    }),
    CreaturesModule,
    BattlesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
