import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit  {
  @ViewChild('myContact') myContact!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('btnSendField') btnSendField!: ElementRef;

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

  async onSubmit() {
    this.isSubmitted = true;
    if (this.myForm.valid){
      this.isSubmitted = false;
      console.log("Form Submitted!", this.myForm.value);
      
      this.sendMail();
      this.myForm.reset();
    }
  }

  async sendMail(){
    // https://sinan-simsek.developerakademie.net/send_mail/send_mail.php
    console.log('sending Mail', this.myContact);

    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let btnSendField = this.btnSendField.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    btnSendField.disabled = true;

    // animation triggern

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    // senden
    await fetch('https://sinan-simsek.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
        
      }
    );
    
    document.getElementById('btnSend')?.classList.remove('dnone');
    setTimeout(function(){document.getElementById('btnSend')?.classList.add('dnone')}, 2000);

      // text anzeigen nachricht gesendet
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    btnSendField.disabled = false;
  }

}
