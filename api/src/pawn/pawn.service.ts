import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pawn } from '../entities/pawn.entity/pawn.entity';

@Injectable()
export class PawnService {
  constructor(
    @InjectRepository(Pawn)
    private readonly pawnRepository: Repository<Pawn>,
  ) {}

  findAll(): Promise<Pawn[]> {
    return this.pawnRepository.find();
  }

  async findOne(id: number): Promise<Pawn> {
    const pawn = await this.pawnRepository.findOne({ where: { id } });
    if (!pawn) throw new Error('Pawn not found');
    return pawn;
  }

  create(pawn: Partial<Pawn>): Promise<Pawn> {
    const entity = this.pawnRepository.create(pawn);
    return this.pawnRepository.save(entity);
  }

  async update(id: number, pawn: Partial<Pawn>): Promise<Pawn> {
    await this.pawnRepository.update(id, pawn);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.pawnRepository.delete(id);
  }
}
