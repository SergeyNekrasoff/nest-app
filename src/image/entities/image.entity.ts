import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // url: string;

  @Column({ type: 'bytea' })
  data: Buffer;

  // @Column()
  // createdAt: Date;
}
