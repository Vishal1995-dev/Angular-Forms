import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-with-builder',
  templateUrl: './form-with-builder.component.html'
})
export class FormWithBuilderComponent implements OnInit {
  
  myForm:FormGroup;
  
  constructor(fb:FormBuilder) {
  	this.myForm=fb.group({
  		'name':['Vishal']
  	});	
  }

  ngOnInit(): void {
  }
  
  onSubmit(value: string): void {
	console.log('you submitted value: ', value);
  }
}
