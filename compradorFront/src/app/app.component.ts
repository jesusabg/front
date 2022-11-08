import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompradorService } from './services/comprador.service';
import { DtoBuyer } from './models/DtoBuyer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compradorFront'
  constructor(private _CompradorService:CompradorService,private _fb:FormBuilder){}

  private _form!: FormGroup;
  public get MyForm(): FormGroup {
    return this._form;
  }


  ngOnInit(): void {
    this._form = this._fb.group({
      providerName: ['', [Validators.required]],
      numberOfPieces: [null, [Validators.required]]
    })
    this.getTasksBuyer();
  }

 

  getTasksBuyer(){
    this._CompradorService.getBuyerTasks()
    .subscribe({
      next:(response)=>{
        console.log(response);
        
      },
      error:(error)=>{
        console.log(error);
      }
    });
  }

  postTaskBuyer(){
    const data = this.MyForm.value as DtoBuyer;
    data.id = "";
    this._CompradorService.postBuyerTasks(data)
    .subscribe({
      next:(response)=>{
        console.log(response);
        
      },
      error:(error)=>{
        console.log(error);
        console.log(data);
        
      },
      complete:()=>{
        this.MyForm.reset();
      }
    })
  }
}
