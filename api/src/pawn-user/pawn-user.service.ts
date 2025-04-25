import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PawnUser } from '../entities/pawn-user.entity/pawn-user.entity';

@Injectable()
export class PawnUserService {
  constructor(
    @InjectRepository(PawnUser)
    private readonly pawnUserRepository: Repository<PawnUser>,
  ) {}

  findAll(): Promise<PawnUser[]> {
    return this.pawnUserRepository.find();
  }

  async findOne(id: number): Promise<PawnUser> {
    const pawnUser = await this.pawnUserRepository.findOne({ where: { id } });
    if (!pawnUser) throw new Error('PawnUser not found');
    return pawnUser;
  }

  create(pawnUser: Partial<PawnUser>): Promise<PawnUser> {
    const entity = this.pawnUserRepository.create(pawnUser);
    return this.pawnUserRepository.save(entity);
  }

  async update(id: number, pawnUser: Partial<PawnUser>): Promise<PawnUser> {
    await this.pawnUserRepository.update(id, pawnUser);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.pawnUserRepository.delete(id);
  }
}
