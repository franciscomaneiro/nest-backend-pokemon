import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Battle {
  @PrimaryColumn()
  id: string;

  @Column()
  winner: string;

  @Column("int")
  turns: number;

  @Column()
  date: string;
}
