import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../../providers/firebase-service/firebase-service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

/**
 * Generated class for the ThankyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
})
export class ThankYouPage {

  feedbackItems: Observable<any[]>;


  constructor(database: AngularFireDatabase, public navCtrl: NavController, public firebaseService: FirebaseService) {
    this.feedbackItems = database.list('feedbackItems').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankyouPage');
  }

}
