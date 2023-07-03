import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import constants from './constants';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: constants.secret,
    });
  }

  async validate(payload: any) {
    const { id } = payload;
    const user = await UserEntity.findOneBy({ id });
    if (!user) {
      throw new UnauthorizedException('user not found');
    }

    return user;
  }
}
