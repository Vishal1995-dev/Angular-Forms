import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

function nameValidator(control): { [s: string]: boolean } {
	if (!control.value.match(/^123/)) {
		return {invalidName: true};
	}
}

@Component({
  selector: 'app-form-with-builder',
  templateUrl: './form-with-builder.component.html'
})

export class FormWithBuilderComponent implements OnInit {
  
  myForm:FormGroup;
  name:AbstractControl;
  Name:string;
  
  constructor(fb:FormBuilder) {
  	this.myForm=fb.group({
  		'name':['',Validators.compose([Validators.required,nameValidator])]
  	});	
  	this.name=this.myForm.controls['name'];
	
	this.name.valueChanges.subscribe(
	(value: string) => {
		console.log('Name changed to:', value);
	}
	);
	
	this.myForm.valueChanges.subscribe(
	(form: any) => {
		console.log('Form changed to:', form);
	}
	);  
  
  }

  ngOnInit(): void {
  }
  
  onSubmit(value: string): void {
	console.log('you submitted value: ', value);
  }
}
