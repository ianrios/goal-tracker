import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Buckets, type Bucket } from "../lib/definitions";

@Entity()
export class Goal {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date | null;

  @Column({ nullable: true })
  completedAt: Date | null;

  @Column({ nullable: true })
  archivedAt: Date | null;

  @Column({ nullable: true })
  deletedAt: Date | null;

  @Column()
  deadline: Date;

  @Column()
  header: string;

  @Column()
  body: string;

  @Column({
    type: "enum",
    enum: Buckets,
  })
  bucket: Bucket;
}
