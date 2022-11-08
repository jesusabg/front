import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedorService } from './services/proveedor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proveedorFront';

  constructor(private _ProveedorService:ProveedorService,private _fbP:FormBuilder){}

  private _form!: FormGroup;
  public get MyFormP(): FormGroup {
    return this._form;
  }

  ngOnInit(): void {
    this._form = this._fbP.group({
      NumberOfMissingPieces: [null, [Validators.required]]
    });
  }
}
