import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() msgFromHome;
  @Input() run;
  @Input() getDataFromChild;
  public childInfo="this is from child footer info. "
  constructor() { }

  ngOnInit() {
  }

  sendParent(){
    this.getDataFromChild(this.childInfo);
  } 

}
