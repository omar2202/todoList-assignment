import { Component, Input, Output, EventEmitter } from '@angular/core';


import { Task } from '../app.component';


@Component({
  selector: 'situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.css']
})
export class Situation {
  dialog: any;
  constructor() { }

  @Input() task!: Task;

  @Output() delete = new EventEmitter<Task>();

  @Output() check = new EventEmitter<any>();

  editable: boolean = false;



  onCheck(task: Task) {
    task.completed = !task.completed;
    this.check.emit();
  }
  onDelete(task:Task){
    this.delete.emit(task)
  }
}
