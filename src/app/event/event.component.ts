import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  eventForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public restService : RestService,
   
  ) {}

  ngOnInit(): void {

    this.eventForm = this.formBuilder.group({
      actualUsers: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(6)]],
      maxUsers: ['', Validators.required],
      name: ['', Validators.required],
  });
  }

  addPosts() {
     const p: EventApi = ({
         Date: "2020-04-08",
         actualUsers: this.eventForm.value.actualUsers,
         description: this.eventForm.value.description,
         id: 0,
         maxUsers: this.eventForm.value.maxUsers,
         name: this.eventForm.value.name,
         photo: "string",
         stage: "string"
     });

     this.restService.addPost(p).subscribe( post =>{
         console.log(post); 
       });
     }
 
}

export interface EventApi {
  Date?: string;
  actualUsers?: number;
  description?: string;
  id?: number;
  maxUsers?: number;
  name?: string;
  photo?: string;
  stage?: string;
}

