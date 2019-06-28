import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { AsksModels } from '../../models/asksmodels';

@Component({
  selector: 'page-question-submitted',
  templateUrl: 'question-submitted.html'
})
export class QuestionSubmittedPage {
  askItem: AsksModels;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    let askcategory = navParams.get('askcategory');
    let ask = navParams.get('ask');
    let answer = navParams.get('answer');
    this.askItem = new AsksModels (askcategory, ask, answer);
  }
  
}
