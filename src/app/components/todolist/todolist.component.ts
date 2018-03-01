import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public todo:any='';
  public list=[];

  constructor() { }

  ngOnInit() {
  } 
  addData(){
    this.list.push(this.todo)
  }
  addTodo(e){

    if(e.keyCode == 13){
      let obj = {
        todo :this.todo,
        status:1
      }
      this.list.push(obj);
      this.todo ='';
    }
  }
  deleteData(index){
    this.list.splice(index,1);
  }
  changeTodo(index){
    this.list[index].status = 0
  }

}
