import { Component, OnInit} from '@angular/core';
import {  FormGroup, NgForm, Validators, FormBuilder } from "@angular/forms";
import { UserService } from '../_services';
import { Router } from '@angular/router';


export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {

  

  fitnessForm: FormGroup;
  
  constructor(private fb: FormBuilder, private user: UserService, private router : Router) { }
  

  ngOnInit() {
    this.fitnessForm = this.fb.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      phonenumber: ["", [Validators.required]],
      email: ["", [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      age: ["", [Validators.required, Validators.min(18),Validators.max(60)]],
      streetaddress: ["", [Validators.required]],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]],
      country: ["", [Validators.required]],
      pincode:["", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      packages: ["", [Validators.required]],
      trainerpreference: ["", [Validators.required]],
      inr: ["", [Validators.required]],
      paisa: ["", [Validators.required]],

      
    });
    
  }

  onSubmit(fitnessForm : NgForm) : void {
    console.log(fitnessForm);
    this.user.postfitnessdata(fitnessForm.value).subscribe();
    this.router.navigate(['/view-appointment']);
  }
    
}
