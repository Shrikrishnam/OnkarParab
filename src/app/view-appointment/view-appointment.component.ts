import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { Fitness } from '../place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {
  Fitness : Fitness[];
  



  constructor(private user: UserService) { 
    
    
  }

  

  
  

  ngOnInit() {
    this.getfitness()
  }
  
  getfitness() {
    this.user.getfitnessdata().subscribe(
      (data:Fitness[]) =>{
        this.Fitness =data;
        
        }
    )
    
  }

  deleteFitness(id : number){
    
    this.user.deletefitnessdata(id).subscribe(
      (data:Fitness[]) =>{
        this.getfitness();
        
      }

    )
  }
}
