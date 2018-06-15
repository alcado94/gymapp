import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  iduser: number;

  @Column({ length: 500 })
  email: string;

  @Column('text')
  pass: string;

  @Column('text')
  name: string;

  @Column('text')
  imageUrl: string;
}
