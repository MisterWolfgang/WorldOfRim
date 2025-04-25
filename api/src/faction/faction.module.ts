import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faction } from '../entities/faction.entity/faction.entity';
import { FactionController } from './faction.controller';
import { FactionService } from './faction.service';

@Module({
  imports: [TypeOrmModule.forFeature([Faction])],
  controllers: [FactionController],
  providers: [FactionService],
  exports: [FactionService],
})
export class FactionModule {}
