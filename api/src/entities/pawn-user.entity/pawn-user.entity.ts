import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user.entity/user.entity';
import { Pawn } from '../pawn.entity/pawn.entity';

@Entity()
export class PawnUser {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.pawnUsers, { eager: true })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Pawn, pawn => pawn.pawnUsers, { eager: true })
  @JoinColumn({ name: 'pawnId' })
  pawn: Pawn;

  // Ajoute ici d'autres champs de contexte si besoin (ex : streamerId, date, etc.)
}
