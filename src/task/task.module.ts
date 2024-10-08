import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';

@Module({
    imports: [TypeOrmModule.forFeature([TaskEntity])],
    providers: [TaskResolver, TaskService]
})
export class TaskModule { }
