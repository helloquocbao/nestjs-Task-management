import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowStatus = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    const status = value.status.toUpperCase();

    if (!this.isIdValid(value.id)) {
      throw new BadRequestException(`${value.id} is not a number`);
    }

    if (!this.isStatusValid(status)) {
      throw new BadRequestException(`${status} is an invalid status`);
    }

    return { id: value.id, status: status };
  }

  private isIdValid(id: any) {
    if (!isNaN(id)) {
      return true;
    }
    return false;
  }

  private isStatusValid(status: any) {
    const idx = this.allowStatus.indexOf(status);
    return idx !== -1;
  }
}
