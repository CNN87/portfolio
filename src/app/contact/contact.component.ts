import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit  {
  
  // constructor() { }

  // ngOnInit(): void {
  // }

  // // public contactForm: FormGroup = new FormGroup({
  // //   name: new FormControl('', [Validators.required],[]),
  // //   email: new FormControl('', [Validators.required, Validators.email],[]),
  // //   message: new FormControl('', [Validators.required],[]),
  // // })

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
    // if (this.contactForm.valid){
    //   console.log("Form Submitted!", this.contactForm.value);
    //   this.contactForm.reset();
    // }

  //   // if (this.contactForm.controls['name'].dirty){
      
  //   // }
    
  // }


  myForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.myForm.valid){
      this.isSubmitted = false;
      console.log("Form Submitted!", this.myForm.value);
      this.myForm.reset();
    }
  }

  
}
