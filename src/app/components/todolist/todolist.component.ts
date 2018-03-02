import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public todo: any = '';
  public todoList = [];
  public doneList = [];
 
  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.initTodo()
  }

  initTodo() {
    var todoArr = this.storage.getItem('todoList');
    if (todoArr) {
      this.todoList = todoArr
    }
    var doneArr = this.storage.getItem('doneList');
    if (doneArr) {
      this.doneList = doneArr

    }
  }
  addTodo(e) {
    let todoObj = {
      todo: this.todo,
      done: false
    }

    if (e.keyCode == 13) {
      var tempList = this.storage.getItem('todoList');
      if (tempList) {
        tempList.push(todoObj)
        this.storage.setItem('todoList', tempList);

      } else {
        var tempData = []
        tempData.push(todoObj)
        this.storage.setItem('todoList', tempData);
      }
      this.todoList.push(todoObj);
      this.todo = '';
    }
  }
  deleteTodo(index, done) {
    if (done) {
      this.todoList.splice(index, 1);
      this.storage.setItem('todoList', this.todoList)
    } else {
      this.doneList.splice(index, 1);
      this.storage.setItem('doneList', this.doneList)
    }

  }
  changeTodo(index, done) {
    if (done) {
      var tempTodo = this.todoList[index]
      console.log(tempTodo)
      this.doneList.push(tempTodo);
      console.log(this.doneList)
      this.todoList.splice(index, 1);
      this.storage.setItem('todoList', this.todoList)
      this.storage.setItem('doneList', this.doneList)
    } else {
      var tempDone = this.doneList[index]
      this.todoList.push(tempDone);
      this.doneList.splice(index, 1);
      this.storage.setItem('todoList', this.todoList)
      this.storage.setItem('doneList', this.doneList)
    }

  }
  clearData() {
    localStorage.clear();
    this.todoList = [];
    this.doneList = [];
  }


}
