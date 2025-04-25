import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Pawn } from '../pawn.entity/pawn.entity';

export enum FactionType {
  JOUEUR = 'joueur',
  NEUTRE = 'neutre',
  HOSTILE = 'hostile',
  AUTRE = 'autre',
}

@Entity()
export class Faction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column({ type: 'enum', enum: FactionType, default: FactionType.AUTRE })
  type: FactionType;

  @Column({ nullable: true })
  couleur?: string;

  @OneToMany(() => Pawn, pawn => pawn.faction)
  membres: Pawn[];

  @Column({ nullable: true })
  chefId?: number;

  @Column({ type: 'json', nullable: true })
  relations?: any;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
