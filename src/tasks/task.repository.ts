import { DataSource, Repository } from 'typeorm';
import { Task } from './task.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskRepository extends Repository<Task> {
  constructor(private dataSaource: DataSource) {
    super(Task, dataSaource.createEntityManager());
  }
}
