import { Module } from "@nestjs/common";
import { CreaturesController } from "./controller/creatures.controller";
import { CreaturesService } from "./service/creatures.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Creature } from "./model/creatures.entity";
import { BattlesModule } from "src/battle/battles.module";

@Module({
  imports: [TypeOrmModule.forFeature([Creature]), BattlesModule],
  controllers: [CreaturesController],
  providers: [CreaturesService],
  exports: [CreaturesService],
})
export class CreaturesModule {}
