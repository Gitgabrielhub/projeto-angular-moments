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
  allMomoments:Moment[] = []
  moments:Moment[]=[]
  baseApiUrl = environment.baseApiUrl;
  
  constructor(private serviceMoment: MomentService){}

  ngOnInit(): void {
    this.serviceMoment.getMoments().subscribe((itens)=>{
      const data= itens.data
      data.map((item)=>{
        item.createdAt = new Date(item.createdAt!).toLocaleDateString(
          'pt-br'
        ).toString();
      })
      this.allMomoments = data;
      this.moments = data;
    })
  }
  
}
