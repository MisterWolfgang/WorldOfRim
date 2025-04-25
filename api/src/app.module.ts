import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PawnModule } from './pawn/pawn.module';
import { FactionModule } from './faction/faction.module';
import { PawnUserModule } from './pawn-user/pawn-user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST', 'localhost'),
        port: parseInt(config.get('DB_PORT', '3306'), 10),
        username: config.get('DB_USER', 'root'),
        password: config.get('DB_PASS', '@Alohomora87'),
        database: config.get('DB_NAME', 'worldofrim'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    UserModule,
    PawnModule,
    FactionModule,
    PawnUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
