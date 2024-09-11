import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Battle } from "../model/battle.entity";
import { CreateBattleDto } from "../types";

@Injectable()
export class BattleService {
  /**
   *
   */
  constructor(
    @InjectRepository(Battle)
    private BattleService: Repository<Battle>,
  ) {}
  /**
   *
   */

  async findAll(): Promise<Battle[]> {
    return await this.BattleService.find();
  }

  async create(battle: CreateBattleDto): Promise<Battle> {
    let result: Battle;
    try {
      result = await this.BattleService.save(battle);
    } catch (error) {
      result = null;
      console.error("Error", error);
    }
    return result;
  }
}
