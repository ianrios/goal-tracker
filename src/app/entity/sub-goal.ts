import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class SubGoal {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt?: Date;

  @Column()
  deletedAt?: Date;

  @Column()
  parentGoalId: string;

  @Column()
  childGoalId: string;
}
