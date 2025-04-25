import { DataSource } from "typeorm";
import { User } from './src/entities/user.entity/user.entity';
import { Pawn } from './src/entities/pawn.entity/pawn.entity';
import { Faction } from './src/entities/faction.entity/faction.entity';
import { PawnUser } from './src/entities/pawn-user.entity/pawn-user.entity';

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: +(process.env.DB_PORT || 3306),
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "@Alohomora87",
  database: process.env.DB_NAME || "worldofrim",
  synchronize: true,
  logging: true,
  entities: [User, Pawn, Faction, PawnUser],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
