import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PawnUser } from '../entities/pawn-user.entity/pawn-user.entity';
import { PawnUserController } from './pawn-user.controller';
import { PawnUserService } from './pawn-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([PawnUser])],
  controllers: [PawnUserController],
  providers: [PawnUserService],
  exports: [PawnUserService],
})
export class PawnUserModule {}
