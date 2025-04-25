import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { PawnUser } from '../pawn-user.entity/pawn-user.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  twitchId: string;

  @Column()
  twitchPseudo: string;

  @Column()
  twitchAccessToken: string;

  @Column()
  twitchRefreshToken: string;

  @Column()
  twitchTokenType: string;

  @Column()
  twitchTokenExpiresIn: number;

  @Column({ nullable: true })
  avatar?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => PawnUser, pawnUser => pawnUser.user)
  pawnUsers: PawnUser[];
}
