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
    // this.list = this.storage.getItem('todolist')
  }
  addData() {
    this.list.push(this.todo)
  }
  addTodo(e) {
    let obj = {
      todo: this.todo,
      status: 1
    }

    if (e.keyCode == 13) {
      var todolist = this.storage.getItem('todolist');
      if (todolist) {
        todolist.push(obj)
        this.storage.setItem('todolist',todolist);

      } else {
        var arr = []
        arr.push(obj)
        this.storage.setItem('todolist',arr);
      }


      this.list.push(obj);
      this.todo = '';
    }
  }
  deleteData(index) {
    this.list.splice(index, 1);
    this.storage.setItem('todolist', this.list)
    // this.storage.removeItem(this.list[index])
  }
  changeTodo(index,status) {
    this.list[index].status = status;
    if(status=1){

    }
    // doneCount++;
    this.storage.setItem('todolist', this.list)
  }

}
