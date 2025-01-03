import { Like } from './../../../like';
import { Component } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/enviroments/enviroment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  allMomoments:Moment[] = [];
  moments:Moment[]=[];
  curtidas= 0;
  descurtidas=0;
  nomenclatura = " curtida";
  nomenclaturaDeslike = 'deslike'

  baseApiUrl = environment.baseApiUrl;
  
  
  constructor(private serviceMoment: MomentService){}

  ngOnInit(): void {
    this.serviceMoment.getMoments().subscribe((itens)=>{
      const data= itens.data
      data.map((item)=>{
        if(item.createdAt){
          item.createdAt = new Date(item.createdAt).toLocaleDateString('pt-br').toString();
        }
      })
      this.allMomoments = data;
      this.moments = data;
    })
  }
  
  curtir(){
    this.curtidas++;
    if(this.curtidas > 1){
      this.nomenclatura = 'curtidas';
    }
  }
  deslike(){
    this.descurtidas++;
    if(this.descurtidas > 1){
      this.nomenclaturaDeslike = 'deslikes';
    }
  }
}
