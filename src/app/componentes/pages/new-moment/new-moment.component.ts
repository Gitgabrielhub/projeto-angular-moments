import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss']
})
export class NewMomentComponent {
  btnText="Compartilhar";
 

  constructor(private momentService:MomentService, private messageService: MessageService, private router:Router ){}
  ngOnInit(): void { 
  }

  async createHandler(moment:Moment){
    const formDta = new FormData();
    formDta.append('title',moment.title);
    formDta.append('description',moment.description);

    if(moment.image){
      formDta.append('image', moment.image);
    }

    await this.momentService.createMoment(formDta).subscribe();

    this.momentService.getMoments().subscribe(data=>{
      console.log(data)
    })
    this.messageService.add("momento adicionado com sucesso")
    this.router.navigate(['/']);
  }

}
