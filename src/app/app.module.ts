import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AsksPage } from '../pages/ask/ask';
import { QuestionSubmittedPage } from '../pages/question-submitted/question-submitted';
import { SavedPage } from '../pages/saved/saved';
import { QuestionsPage } from '../pages/questions/questions';
import { Welcome } from '../pages/welcome/welcome';
import { FormsModule } from '@angular/forms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Feedback } from '../pages/feedback/feedback';
import { VotingPage } from '../pages/voting/voting';
import { ThankYouPage } from '../pages/thankyou/thankyou';

import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FirebaseService } from '../providers/firebase-service/firebase-service';
import { FIREBASE_CONFIG } from './app.firebase.config';

@NgModule({
  declarations: [
    MyApp,
    AsksPage,
    QuestionSubmittedPage,
    SavedPage,
    QuestionsPage,
    Welcome,
    Feedback,
    VotingPage,
    ThankYouPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AsksPage,
    QuestionSubmittedPage,
    SavedPage,
    QuestionsPage,
    Welcome,
    Feedback,
    VotingPage,
    ThankYouPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}