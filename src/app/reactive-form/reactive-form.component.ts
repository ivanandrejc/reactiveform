import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group ({
      email: this.formBuilder.control(''),
      passworld: this.formBuilder.control(''),
    })
  }
  onSubmit(): void{
    console.log(this.userForm.value);
  }
}
