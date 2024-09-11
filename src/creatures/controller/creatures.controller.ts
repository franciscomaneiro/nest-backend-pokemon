import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
import { CreaturesService } from "../service/creatures.service";
import { Creature } from "../model/creatures.entity";
import { CreateCreatureDto } from "../types";

@Controller("creatures")
export class CreaturesController {
  /**
   *
   */
  constructor(private creaturesService: CreaturesService) {}

  @Get()
  index(): Promise<Creature[]> {
    return this.creaturesService.findAll();
  }

  @Post("create")
  async create(@Body() creatureData: CreateCreatureDto): Promise<any> {
    console.log("Create", creatureData);
    return this.creaturesService.create(creatureData);
  }

  @Post("fight")
  async fight(@Body() fightData: { id1: string; id2: string }): Promise<any> {
    console.log("Fight", fightData);
    return this.creaturesService.fight(fightData.id1, fightData.id2);
  }

  @Put(":id/update")
  async update(@Param("id") id, @Body() creatureData: Creature): Promise<any> {
    creatureData.id = id;
    console.log("Update #" + creatureData.id);
    return this.creaturesService.update(creatureData);
  }

  @Delete(":id/delete")
  async delete(@Param("id") id): Promise<any> {
    return this.creaturesService.delete(id);
  }
}
