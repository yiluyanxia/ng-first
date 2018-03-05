import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from '@angular/http'
// import {Observable} from "rxjs";
import "rxjs/Rx";
@Component({
  selector: 'app-http-chunk',
  templateUrl: './http-chunk.component.html',
  styleUrls: ['./http-chunk.component.css']
})
export class HttpChunkComponent implements OnInit {
  public list;
  constructor(private http: Http, private jsonp: Jsonp) { }

  ngOnInit() {
  }
  getList(e) {
    console.log(e)
    var _this = this;
    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
    // var url ='https://www.v2ex.com/api/nodes/show.json?name=AngularJS';
    this.http.get(url).subscribe(function (data) {
      console.log(data);
      var list = JSON.parse(data['_body']);
      _this.list = list['result'];

    }, function (err) {
      console.log(err)
    })
  }
  getListByJsonp() {
    this.jsonp.get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK")
      .subscribe(
      function (data) {
        console.log(data);
      }, function (err) {
        console.log('失败');
      }
      );
  }

  getListByRxjs() {
    this.http.get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1")
      .map(res => res.json()).subscribe(function (data) {
        console.log(data);
      });
  }

  getListByJsonpRxjs() {
    this.http.get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK")
      .map(res => res.json()).subscribe(function (data) {
        console.log(data);
      });
  }



}
