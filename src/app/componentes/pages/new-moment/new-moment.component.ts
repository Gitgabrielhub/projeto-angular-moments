import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss']
})
export class NewMomentComponent {
  btnText="Compartilhar";

  constructor(){}
  ngOnInit(): void { 
  }

  async createHandler(moment:Moment){
    const formDta = new FormData();
    formDta.append('title',moment.title);
    formDta.append('description',moment.description);

    if(moment.image){
      formDta.append('image', moment.image);
    }
  }
}
