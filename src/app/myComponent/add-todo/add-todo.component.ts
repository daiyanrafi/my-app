import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor(){ }

  ngOnInit(): void {}
}
onsubmit(){
  const todo = {
    sno: 9,
    title: this.title,
    desc: this.desc,
    active: true
  }
  this.todoAdd.emit(todo);

}
