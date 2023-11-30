import { Component, OnInit } from '@angular/core';
import { newtask, Task } from '../task.service';
@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.scss']
})
export class TaskdisplayComponent implements OnInit {
  tasks: Task[] = [];
  editingTask: Task | null = null;
constructor(private newtask: newtask) {}
ngOnInit(): void {
    this.updatetask();
  }
  updatetask(): void {
    this.tasks = this.newtask.getTasks();
  }
editTask(task: Task): void {
    this.editingTask = { ...task };
  }
updateTask(): void {
    if (this.editingTask) {
      this.newtask.updateTask(this.editingTask);
      this.editingTask = null;
      this.updatetask();
    }
  }
deleteTask(taskId: number): void {
    this.newtask.deleteTask(taskId);
    this.updatetask();
  }
}
