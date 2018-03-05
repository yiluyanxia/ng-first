import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpChunkComponent } from './http-chunk.component';

describe('HttpChunkComponent', () => {
  let component: HttpChunkComponent;
  let fixture: ComponentFixture<HttpChunkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpChunkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpChunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
