import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'lab' })
export class LabEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  title: string;

}