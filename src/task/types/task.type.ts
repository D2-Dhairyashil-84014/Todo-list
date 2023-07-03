import { ObjectType, Field, ID } from '@nestjs/graphql'
import { BaseEntity } from "typeorm"
@ObjectType()
export class TaskType extends BaseEntity {
    @Field(() => ID)
    id: number

    @Field(() => String)
    title: string

    @Field(() => String)
    details: string

    @Field()
    isCompleted: boolean;

}