import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) subscriptionForm: NgForm;
  defaultSubscription = 'Advanced';
  subscriptions = [
    'Basic',
    'Advanced',
    'Pro'
  ]
  subscriber = {
    email: '',
    subscription: '',
    password: ''
  }
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.subscriber.email = this.subscriptionForm.value.email;
    this.subscriber.subscription = this.subscriptionForm.value.subscription;
    this.subscriber.password = this.subscriptionForm.value.password;
    
    this.subscriptionForm.reset();
  }
}
