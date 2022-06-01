import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ default: "" })
  name: string;
}
