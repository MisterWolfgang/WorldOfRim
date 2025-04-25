import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pawn } from '../entities/pawn.entity/pawn.entity';
import { PawnController } from './pawn.controller';
import { PawnService } from './pawn.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pawn])],
  controllers: [PawnController],
  providers: [PawnService],
  exports: [PawnService],
})
export class PawnModule {}
