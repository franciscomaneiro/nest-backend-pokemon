import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Battle } from "./model/battle.entity";
import { BattleController } from "./controller/battle.controller";
import { BattleService } from "./service/battle.service";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Battle])],
  controllers: [BattleController],
  providers: [BattleService],
  exports: [BattleService],
})
export class BattlesModule {}
