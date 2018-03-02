import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public todo: any = '';
  public list = [];
  public doneCount = 0;
  public todoCount = 0;

  // public storage = new StorageService(); /* 可以引入和使用，但是官方不推荐 */

  constructor(private storage: StorageService) {
    console.log(this.storage);
    this.storage.setItem('username', 'kris')
    console.log(this.storage.getItem('username'));

    // console.log(this.storage);
    // this.storage.setItem('username', 'kris')
  }

  ngOnInit() {
    var todolist = this.storage.getItem('todolist');
    if(todolist){
      this.list = todolist

    }
  }
  addData() {
    this.list.push(this.todo)
  }
  addTodo(e) {
    let todoObj = {
      todo: this.todo,
      done: false
    }

    if (e.keyCode == 13) {
      var todolist = this.storage.getItem('todolist');
      if (todolist) {
        todolist.push(todoObj)
        this.storage.setItem('todolist',todolist);

      } else {
        var data = []
        data.push(todoObj)
        this.storage.setItem('todolist',data);
      }
      this.list.push(todoObj);
      this.todo = '';
      this.todoCount++;
    }
  }
  deleteData(index) {
    this.list.splice(index, 1);
    this.storage.setItem('todolist', this.list);
  }
  changeTodo(index,status) {
    // this.list[index].status = status;
    this.list[index].done = status;
    if(status){
      this.todoCount--;
      this.doneCount++;
    }else{
      this.doneCount--;
      this.todoCount++;
    }
    // doneCount++;
    this.storage.setItem('todolist', this.list)
  }
  clearData(){
    localStorage.clear();
  }

}
