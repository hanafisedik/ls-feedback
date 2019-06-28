import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseService } from '../../providers/firebase-service/firebase-service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ThankYouPage } from '../thankyou/thankyou';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class Feedback {
  
  newFeedbackName = '';
  newFeedbackEmail = '';
  newFeedbackFeedback = '';
  submitted = false;

  constructor(database: AngularFireDatabase, public navCtrl: NavController, public firebaseService: FirebaseService) {
  }

  addFeedback(form: NgForm){
    this.submitted = true;

    if(form.valid){
      this.firebaseService.addFeedbackItems(this.newFeedbackName, this.newFeedbackEmail, this.newFeedbackFeedback);
      alert('Thanks For Your Feedback! Head Over To The Theatrette To Collect A Prize!');
    }
  }
}
