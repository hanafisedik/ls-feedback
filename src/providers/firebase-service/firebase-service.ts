import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseService {

  constructor(public afd: AngularFireDatabase) {}

  getFeedbackItems(){
    return this.afd.list('/feedbackItems/');
  }

  addFeedbackItems(name, email, feedback){
    return this.afd.list('/feedbackItems/').push({name: name, email: email, feedback: feedback});
  }

}