import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  projectName = 'todo list';

  taskList: Task[] = [];
  filtered: Task[] = this.taskList;

  taskValues = 'All';
  task!: Task;


  add(taskTitle: string) {
    this.taskList.push(new Task(taskTitle));
  }
  delete(task:Task):void{
      this.filtered.splice(this.filtered.indexOf(task),1)
  }


  filter(searchValue?: string) {
    if (searchValue !== "" && searchValue !== undefined && this.taskValues === 'completed') {
      this.filtered = this.taskList.filter(task =>
        task.title.includes(searchValue) && task.completed);
    } else if (searchValue !== '' && searchValue !== undefined) {
      this.filtered = this.taskList.filter(task =>
        task.title.includes(searchValue));
    } else if (this.taskValues === 'completed') {
      this.filtered = this.taskList.filter(task => task.completed === true);
    } else {
      this.filtered = this.taskList;
    }
  }
}


export class Task {
  _title: string;
  _completed: boolean;

  constructor(title: string) {
      this._title = title;
      this._completed = false;
  }

  public get title(): string {
      return this._title;
  }

  public get completed(): boolean {
      return this._completed;
  }

  public set title(title: string) {
      this._title = title;
  }

  public set completed(completed: boolean) {
      this._completed = completed;
  }
}
