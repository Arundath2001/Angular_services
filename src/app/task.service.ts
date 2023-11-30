import { Injectable } from '@angular/core';
export interface Task {
  id: number;
  title: string;
  description: string;
}
@Injectable({
  providedIn: 'root',
})
export class newtask {
  private tasks: Task[] = [];
  getTasks(): Task[] {
    return this.tasks;
  }
  addTask(task: Task): void {
    this.tasks.push(task);
  }
  updateTask(updatedTask: Task): void {
    const existingTask = this.tasks.find((task) => task.id === updatedTask.id);
    if (existingTask) {
      existingTask.title = updatedTask.title;
      existingTask.description = updatedTask.description;
    }
  }
  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
