import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms-Validation';
  @ViewChild('f',{static:true}) SignupData:NgForm;
  Genders=['male','female'];
  defaultSelected='Ahemdabad';

  // onSubmit(form:NgForm){

  //   console.log(form)
  // }

  onSubmit(){

    console.log(this.SignupData)
  }
}
