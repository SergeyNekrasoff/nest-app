import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: UUID

  @Column({ unique: true })
  username: string

  @Column()
  password: string

  @Column()
  email: string
}