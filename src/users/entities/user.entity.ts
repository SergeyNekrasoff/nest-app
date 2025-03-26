import { Document } from "src/documents/entities/documents.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'integer',
  })
  id: number

  @Column()
  email: string

  @Column({ unique: true })
  username: string

  @Column()
  password: string

  @OneToMany(() => Document, document => document.creator)
  documents: Document[]
}