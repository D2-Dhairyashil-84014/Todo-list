import { JwtAuthGuard } from './jwt.auth.guard';
import { SigninInputType } from './types/signin.input.type';

import { UserService } from './user.service';
import { Query } from '@nestjs/graphql';

import { SignupInputType } from './types/signup.input.type';
import { Args, Mutation } from '@nestjs/graphql';
import { UserType } from './types/user.type';
import { Resolver } from '@nestjs/graphql';
import { SigninResponseType } from './types/signin.response.type';
import { UseGuards } from '@nestjs/common';
import { GetUser } from './get.user.decorator';
import { UserEntity } from './entities/user.entity';

@Resolver(() => UserType)
export class UserResolver {
    constructor(private UserService: UserService) { }

    @Mutation(() => UserType)
    signup(@Args('input') input: SignupInputType) {
        return this.UserService.signup(input);
    }

    @Mutation(() => SigninResponseType)
    signin(@Args('input') input: SigninInputType) {
        return this.UserService.signin(input);
    }


    @Query(() => UserType)
    @UseGuards(JwtAuthGuard)
    profile(@GetUser('user') user: UserEntity) {
        return user;
    }
}
