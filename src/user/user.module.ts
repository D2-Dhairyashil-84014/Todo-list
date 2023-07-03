import { JwtAuthGuard } from './jwt.auth.guard';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { JwtModule } from '@nestjs/jwt';
import constants from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
  JwtModule.register({
    secret: constants.secret,
    signOptions: { expiresIn: '3600s' },
  })],
  providers: [UserResolver, UserService, JwtAuthGuard,JwtStrategy],
  exports: [JwtStrategy, PassportModule, JwtAuthGuard],
})
export class UserModule {

}
