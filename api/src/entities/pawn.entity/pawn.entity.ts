import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Faction } from '../faction.entity/faction.entity';
import { PawnUser } from '../pawn-user.entity/pawn-user.entity';

export enum PawnGenre {
  MALE = 'male',
  FEMALE = 'female',
  NONE = 'none',
}

export enum PawnStatut {
  VIVANT = 'vivant',
  MORT = 'mort',
  PRISONNIER = 'prisonnier',
  ESCLAVE = 'esclave',
  AUTRE = 'autre',
}

@Entity()
export class Pawn {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Faction, faction => faction.membres, { nullable: true })
  faction?: Faction;

  @Column({ nullable: true })
  nom?: string;

  @Column({ nullable: true })
  surnom?: string;

  @Column({ type: 'enum', enum: PawnGenre, default: PawnGenre.NONE })
  genre: PawnGenre;

  @Column({ nullable: true })
  espece?: string;

  @Column({ nullable: true })
  age?: number;

  @Column({ type: 'json', nullable: true })
  traits?: any;

  @Column({ type: 'json', nullable: true })
  skills?: any;

  @Column({ type: 'json', nullable: true })
  sante?: any;

  @Column({ type: 'json', nullable: true })
  inventaire?: any;

  @Column({ type: 'json', nullable: true })
  apparence?: any;

  @Column({ type: 'enum', enum: PawnStatut, default: PawnStatut.VIVANT })
  statut: PawnStatut;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => PawnUser, pawnUser => pawnUser.pawn)
  pawnUsers: PawnUser[];
}
