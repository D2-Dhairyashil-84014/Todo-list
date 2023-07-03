import { Field, ID, ObjectType } from "@nestjs/graphql";
import { BaseEntity } from "typeorm";


@ObjectType()
export class UserType {
    @Field(()=>ID)
    id:number

    @Field()
    name:string
    
    @Field()
    email:string

    @Field()
    gender:string
}