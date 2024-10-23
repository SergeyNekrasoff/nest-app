import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
// import { UsersService } from './users/users.service';
import CONNECTION from './db.connection';
// import { UsersController } from './users/users.controller';

@Module({
  imports: [
    // @ts-ignore
    TypeOrmModule.forRoot({
      ...CONNECTION,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
