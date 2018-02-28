import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title = "你个南瓜米";  /*属性*/
  msg: any;  /*另一种定义属性的方式*/
  public username = "kris wu";
  public student: string = '小气包卖面包';

  nTitle = "鼠标上来了"

  public nTemp = "";

  public list=[];
  public list2=[];

  public obj = {
    name:'kris',
    age:'18'
  }

  constructor() {
    this.msg = '一脚踩死你';
    this.nTemp = '<em>小气鬼，喝凉水</em>';
    this.list = ["aaa","bbb","ccc"];
    this.list2 = [
      {
        "cate":"宝马",
        "list":[
          {"title":"mimi宝马1"},
          {"title":"mimi宝马2"}
        ]
      },
      {
        "cate":"奥迪",
        "list":[
          {"title":"奥迪A6"},
          {"title":"奥迪A8"}
        ]
      },
    ]
  }

  ngOnInit() {
  }

}
