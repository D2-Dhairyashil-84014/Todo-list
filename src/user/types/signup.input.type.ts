import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class SignupInputType{
    @Field()
    name: string

    @Field()
    email: string

    @Field()
    gender:string

    @Field()
    password: string
}