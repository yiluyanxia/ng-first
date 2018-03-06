import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public msg:any;
  public username:any;
  public msgFromHome;
  flag = true;

  public search:any;
  @ViewChild('header') headerChild; //'header'就是在html里的定义的名字。
  constructor() {
    this.msg = "this is home component";
    this.username = "kris wu";
    this.search = "请输入";
    this.msgFromHome="好热"
   }

  ngOnInit() {
  }
  //自定义方法
  getMsg(){
    //获取属性的值
    alert(this.msg)
  }
  setName(){
    this.username = "key"
  }
  run(){
    alert("this is from home's event.")
  }

  getDataFromChild(childData){
    alert("从事件中接收子组件的数据"+childData)
  }
  //通过方法获取子组件的数据
  getChildToParent(){
    this.headerChild.childToParent();
    alert(this.headerChild.childVal);
    this.headerChild.childVal="父组件改变了子组件的值"
  }

}
