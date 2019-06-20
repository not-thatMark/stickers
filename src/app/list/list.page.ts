import { Component, OnInit } from '@angular/core';
import{Todo,TodoService} from'./../services/todo.service'

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  todos:Todo[];
 
  constructor(private todoService:TodoService){}
  ngOnInit(){

    this.todoService.getTodos().subscribe(res=>
      {this.todos=res;});
  }
  remove(item)
  {
    this.todoService.removeTodo(item.id);
  }

}
