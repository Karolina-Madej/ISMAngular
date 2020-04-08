import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../app/rest.service';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app1';
  httpService: any;

  
  constructor(private restService: RestService){
  }

  ngOnInit(){
  }
 
  
}

