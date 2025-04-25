import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PawnService } from './pawn.service';
import { Pawn } from '../entities/pawn.entity/pawn.entity';

@Controller('pawn')
export class PawnController {
  constructor(private readonly pawnService: PawnService) {}

  @Get()
  findAll(): Promise<Pawn[]> {
    return this.pawnService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Pawn> {
    return this.pawnService.findOne(id);
  }

  @Post()
  create(@Body() pawn: Partial<Pawn>): Promise<Pawn> {
    return this.pawnService.create(pawn);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() pawn: Partial<Pawn>): Promise<Pawn> {
    return this.pawnService.update(id, pawn);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.pawnService.remove(id);
  }
}
