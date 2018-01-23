import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../../services/todo-data.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:any;

  todo = {
    completed: false,
    title: '',
    editing: false
  };

  actionSuccess:boolean = false;
  actionError:boolean = false;
  alertMassage:string = '';

  constructor(public todoService: TodoDataService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos().subscribe(todos=>{
      this.todos = todos;
    }, error => {
      console.log(error);
    });
  }

  showAlertMessage(message:string, success:boolean){
    this.alertMassage = message;
    if (success == true) {
      this.actionSuccess = true;
    }else {
      this.actionError = true;
    }
    setTimeout(() => {
      this.actionSuccess = false;
      this.actionError = false;
    }, 2000);
  }
  addTodo(form){
    this.todoService.addTodo(this.todo).subscribe(todo=>{
      this.todos.unshift(todo);
      this.showAlertMessage('Task add success', true);
    }, error2 => {
      this.showAlertMessage('Task add error', false);
    });
    form.resetForm();
  }

  deleteTodo(index){
    this.todoService.deleteTodo(index+1).subscribe(todo=>{
      this.todos.splice(index, 1);
      this.showAlertMessage('Task successfully deleted', true);
    }, error2 => {
      this.showAlertMessage('Delete error', false);
    });
  }

  editTodo(index){
    this.todos[index].editing = !this.todos[index].editing;
  }

  setTodo(todo, index){
    todo.editing = !todo.editing;
    this.todoService.editTodo(todo, index+1).subscribe( todo=>{
      this.showAlertMessage('Task changed successfully', true);
    }, error2 => {
      this.showAlertMessage('Task change error', false);
    });
  }

  doneTodo(todo, index){
    this.todoService.editTodo(todo, index+1).subscribe( t=>{   //как преобразовать t к нашему todo
      todo.completed=!todo.completed;
      this.showAlertMessage('Task changed successfully', true);
    }, error=>{
      this.showAlertMessage('Task changed error', false);
    });
  }
}
