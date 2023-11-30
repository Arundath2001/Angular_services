import { Component, OnInit } from '@angular/core';
import { Task, newtask } from '../task.service';
@Component({
  selector: 'app-taskinsert',
  templateUrl: './taskinsert.component.html',
  styleUrls: ['./taskinsert.component.scss']
})
export class TaskinsertComponent implements OnInit{
  title = '';
  description = '';
constructor(private newtask: newtask) {}
ngOnInit(): void {}
addTask(): void {
    const newTask: Task = {
      id: this.generateId(),
      title: this.title,
      description: this.description,
    };
    this.newtask.addTask(newTask);
    this.clearForm();
}
private generateId(): number {
    return Math.floor(Math.random() * 1000);
  }
private clearForm(): void {
    this.title = '';
    this.description = '';
  }
}
