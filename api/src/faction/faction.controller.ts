import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FactionService } from './faction.service';
import { Faction } from '../entities/faction.entity/faction.entity';

@Controller('faction')
export class FactionController {
  constructor(private readonly factionService: FactionService) {}

  @Get()
  findAll(): Promise<Faction[]> {
    return this.factionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Faction> {
    return this.factionService.findOne(id);
  }

  @Post()
  create(@Body() faction: Partial<Faction>): Promise<Faction> {
    return this.factionService.create(faction);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() faction: Partial<Faction>): Promise<Faction> {
    return this.factionService.update(id, faction);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.factionService.remove(id);
  }
}
