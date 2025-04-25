import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PawnUserService } from './pawn-user.service';
import { PawnUser } from '../entities/pawn-user.entity/pawn-user.entity';

@Controller('pawn-user')
export class PawnUserController {
  constructor(private readonly pawnUserService: PawnUserService) {}

  @Get()
  findAll(): Promise<PawnUser[]> {
    return this.pawnUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PawnUser> {
    return this.pawnUserService.findOne(id);
  }

  @Post()
  create(@Body() pawnUser: Partial<PawnUser>): Promise<PawnUser> {
    return this.pawnUserService.create(pawnUser);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() pawnUser: Partial<PawnUser>): Promise<PawnUser> {
    return this.pawnUserService.update(id, pawnUser);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.pawnUserService.remove(id);
  }
}
