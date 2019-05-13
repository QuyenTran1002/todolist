import { Component, OnInit, Input } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

// @ts-ignore
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  //Set Dynamic Classes
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  onToggle(todo) {
    // Toggle in UI
    // console.log('toggle');
    todo.completed = !todo.completed;
    // Toggle onserver
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    console.log('delete');
  }
}
