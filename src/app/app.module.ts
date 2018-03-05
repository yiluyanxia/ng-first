import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './components/todolist/todolist.component';

import { StorageService } from './services/storage.service';
import { HttpChunkComponent } from './components/http-chunk/http-chunk.component'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    TodolistComponent,
    HttpChunkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    JsonpModule
  ],
  providers: [StorageService], /* 定义的服务*/
  bootstrap: [AppComponent]
})
export class AppModule { }
