import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { QuestionSubmittedPage } from '../pages/question-submitted/question-submitted';
import { SavedPage } from '../pages/saved/saved';
import { QuestionsPage } from '../pages/questions/questions';


import { AsksPage } from '../pages/ask/ask';
import { Welcome } from '../pages/welcome/welcome';
import { Feedback } from '../pages/feedback/feedback';
import { VotingPage } from '../pages/voting/voting';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = Welcome;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToWelcome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Welcome);
  }goToAsk(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AsksPage);
  }goToQuestionSubmitted(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuestionSubmittedPage);
  }goToSaved(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SavedPage);
  }goToQuestions(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuestionsPage);
  }goToFeedback(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Feedback);
  }goToVotingPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(VotingPage);
  }
}
