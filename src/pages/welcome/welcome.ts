import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AsksPage } from '../ask/ask';
import { QuestionsPage } from '../questions/questions';
import { Feedback } from '../feedback/feedback';
import { VotingPage } from '../voting/voting';

@Component({
  selector: 'page-home',
  templateUrl: 'welcome.html'
})
export class Welcome {

  constructor(public navCtrl: NavController) {
  }

  goToAskQuestionPage(){
    this.navCtrl.push(AsksPage);
  }goToViewQuestionsPage(){
    this.navCtrl.push(QuestionsPage);
  }goToGiveFeedbackPage(){
    this.navCtrl.push(Feedback);
  }goToVotingPage(){
    this.navCtrl.push(VotingPage);
  }
  
}
