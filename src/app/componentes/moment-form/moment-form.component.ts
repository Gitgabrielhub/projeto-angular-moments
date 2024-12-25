import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';


@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss']
})
export class MomentFormComponent {
  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() btnText!: string;

  momentForm!:FormGroup 
  items: Moment[]= []
  
  constructor(private service:MomentService) { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('',[Validators.required]),
      image: new FormControl('')
    })
   }  
   returnData(){
    console.log(this.momentForm.value)
   }
   get title(){
    return this.momentForm.get('title')!;
   }
   get description(){
    return this.momentForm.get('description')!;
   }
   
   onFileSelected(event:any){
    const file: File = event.target.files[0];
    this.momentForm.patchValue({image:file})

   }

   
   submit(){
   
    if(this.momentForm.invalid){
      return;
    }
    const saveData = JSON.stringify(this.momentForm.value)
    //console.log(saveData)
    localStorage.setItem('DataUser', String(saveData))

    this.onSubmit.emit(this.momentForm.value)
    
  }
 
  

}
