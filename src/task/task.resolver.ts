import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { TaskInputType } from "./types/task.input.type";
import { TaskService } from "./task.service";
import { TaskType } from "./types/task.type";
import { JwtAuthGuard } from "src/user/jwt.auth.guard";
import { GetUser } from 'src/user/get.user.decorator';
import { UserEntity } from 'src/user/entities/user.entity';

@Resolver(() => TaskType)
@UseGuards(JwtAuthGuard)
export class TaskResolver {

  constructor(private taskservice: TaskService) { }

  @Query(() => [TaskType])
  task(@GetUser('user') user: UserEntity) {
    return this.taskservice.task(user.id);
  }

  @Mutation(() => TaskType)
  createtask(
    @GetUser('user') user: UserEntity,
    @Args('input') input: TaskInputType) {
    return this.taskservice.createtask(user, input);
  }

  @Mutation(() => TaskType)
  completeTask(
    @GetUser('user') user: UserEntity,
    @Args('id') id: number) {
    return this.taskservice.completeTask(user.id, id);
  }

  @Mutation(() => String)
  deleteTask(
    @GetUser('user') user: UserEntity,
    @Args('id') id: number) {
    return this.taskservice.deleteTask(user.id, id)
  }

}