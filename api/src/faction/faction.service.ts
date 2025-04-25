import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faction } from '../entities/faction.entity/faction.entity';

@Injectable()
export class FactionService {
  constructor(
    @InjectRepository(Faction)
    private readonly factionRepository: Repository<Faction>,
  ) {}

  findAll(): Promise<Faction[]> {
    return this.factionRepository.find();
  }

  async findOne(id: number): Promise<Faction> {
    const faction = await this.factionRepository.findOne({ where: { id } });
    if (!faction) throw new Error('Faction not found');
    return faction;
  }

  create(faction: Partial<Faction>): Promise<Faction> {
    const entity = this.factionRepository.create(faction);
    return this.factionRepository.save(entity);
  }

  async update(id: number, faction: Partial<Faction>): Promise<Faction> {
    await this.factionRepository.update(id, faction);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.factionRepository.delete(id);
  }
}
