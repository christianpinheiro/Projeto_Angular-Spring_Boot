import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {
  
  toppings = this._formBuilder.group({
    processador: false,
    memoria: false,
    vga: false,
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
