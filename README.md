"# ls-feedback" 

#how to do CRUD with firebase
https://edupala.com/integrating-firebase-in-ionic/

#if object(...) is not a function shows up, carry out the following in Command Prompt
npm i rxjs@^6.0 rxjs-compat

#firelistobservable has been deprecated import the following instead
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

#then change the following:
shoppingItems: FirebaseListObservable<any[]>;

#to the following:
shoppgingItems: Observable<any[]>;

#on your html page, change the following:
<ion-item>
   {{ item.$value }}
</ion-item>

#to the following:
<ion-item>
  {{ item | json }}
</ion-item>
