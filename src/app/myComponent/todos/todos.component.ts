import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor(){
    this.todos = [
      {
        sno:1,
        title: "this is fun",
        desc: "desc",
        active: true,
      },
      {
        sno:1,
        title: "this is fun",
        desc: "desc",
        active: true,
      },
      {
        sno:1,
        title: "this is fun",
        desc: "desc",
        active: true,
      }
    ];
  }

  ngOnInit(): void {
    
  }
  deleteTodo(todo: Todo){
console.log(todo);
const index = this.todos.indexOf(todo);
this.todos.splice(index, 1);
  }
}

