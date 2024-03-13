import { TaskStatus } from '../task-status.enum';

export class UpdateTaskStatusDto {
  id: number;
  status: TaskStatus;
}
