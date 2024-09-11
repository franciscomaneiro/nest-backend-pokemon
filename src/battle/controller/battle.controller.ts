import { Body, Controller, Get, Post } from "@nestjs/common";
import { BattleService } from "../service/battle.service";
import { Battle } from "../model/battle.entity";
import { CreateBattleDto } from "../types";

@Controller("battle")
export class BattleController {
  /**
   *
   */
  constructor(private creaturesService: BattleService) {}

  @Get()
  index(): Promise<Battle[]> {
    return this.creaturesService.findAll();
  }

  @Post("create")
  async create(@Body() creatureData: CreateBattleDto): Promise<any> {
    console.log("Create", creatureData);
    return this.creaturesService.create(creatureData);
  }
}
