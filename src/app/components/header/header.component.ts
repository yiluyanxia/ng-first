import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() msg:string; //通过Input接收父组件传过来的msg
@Output() toparent = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  getHttpList(){
    //调用父组件的方法请求数据
    this.toparent.emit("这是子组件的值");
  }
}
