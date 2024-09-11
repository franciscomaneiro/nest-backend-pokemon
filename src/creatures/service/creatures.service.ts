import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateResult, DeleteResult } from "typeorm";
import { Creature } from "../model/creatures.entity";
import { CreateCreatureDto } from "../types";
import { BattleService } from "src/battle/service/battle.service";

@Injectable()
export class CreaturesService {
  @Inject(BattleService)
  private readonly BattleService: BattleService;
  /**
   *
   */
  constructor(
    @InjectRepository(Creature)
    private CreaturesService: Repository<Creature>,
  ) {}
  /**
   *
   */

  async findAll(): Promise<Creature[]> {
    return await this.CreaturesService.find();
  }

  async create(creature: CreateCreatureDto): Promise<Creature> {
    let result: Creature;
    try {
      result = await this.CreaturesService.save(creature);
    } catch (error) {
      result = null;
      console.error("Error", error);
    }
    return result;
  }
  // Should not be necessary
  async update(creature: Creature): Promise<UpdateResult> {
    return await this.CreaturesService.update(creature.id, creature);
  }
  // Should not be necessary
  async delete(id): Promise<DeleteResult> {
    return await this.CreaturesService.delete(id);
  }

  async fight(
    id1: string,
    id2: string,
  ): Promise<{ winner: Creature; turns: number }> {
    const creature1 = await this.CreaturesService.findOne({
      where: { id: id1 },
    });
    const creature2 = await this.CreaturesService.findOne({
      where: { id: id2 },
    });
    let turns = 1;
    const endTurn = () => {
      turns++;
    };

    const calculateDamage = (attacker: Creature, defender: Creature) => {
      const damage = attacker.attack - defender.defense;
      if (attacker.attack <= defender.defense) {
        return 1;
      }
      return damage;
    };
    let attacker: Creature;
    let defender: Creature;
    let result: { winner: Creature; turns: number };
    while (creature1.hp > 0 && creature2.hp > 0) {
      if (creature1.speed === creature2.speed) {
        if (creature1.attack > creature2.attack) {
          attacker = creature1;
          defender = creature2;
        }
        if (creature2.attack > creature1.attack) {
          attacker = creature2;
          defender = creature1;
        }
      }
      if (creature1.speed > creature2.speed) {
        attacker = creature1;
        defender = creature2;
      }
      if (creature2.speed > creature1.speed) {
        attacker = creature2;
        defender = creature1;
      }
      defender.hp -= calculateDamage(attacker, defender);
      if (defender.hp <= 0) {
        result = {
          winner: attacker,
          turns,
        };
      }
      attacker.hp -= calculateDamage(defender, attacker);
      if (attacker.hp <= 0) {
        result = {
          winner: defender,
          turns,
        };
      }
      console.log("Combat turns:", turns);
      endTurn();
    }

    try {
      await this.BattleService.create({
        id: `${new Date().getTime()}`,
        winner: result.winner.name,
        turns: result.turns,
        date: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error", error);
    }
    return result;
  }
}
