import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('activity')
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  place: string;

  @Column('text')
  imageUrl: string;
}
