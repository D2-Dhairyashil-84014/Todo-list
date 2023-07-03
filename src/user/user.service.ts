import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ID } from '@nestjs/graphql';
import { SigninInputType } from './types/signin.input.type';
import { SignupInputType } from './types/signup.input.type';
import { UserEntity } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(private jwtService: JwtService) { }

    async signup(input: SignupInputType) {
        const { name, email, gender, password } = input
        const user = new UserEntity()
        user.name = name;
        user.email = email;
        user.gender = gender;
        user.password = password;
        await user.save();
        return user;
    }

    async signin(input: SigninInputType) {
        const { email, password } = input
        const user = await UserEntity.findOneBy({ email, password })
        if (!user) {
            throw new UnauthorizedException('your account does not exist');
        }

        //create payload
        const payload ={
            id: user.id,
            name: user.name,
        };

        //create token
        const token = this.jwtService.sign(payload);
        return {token};
    }

    async profile(id: number) {
        const user = await UserEntity.findOneBy({ id })
        if (!user) {
            throw new UnauthorizedException('your account does not exist');

        }
        return user;
    }

}
