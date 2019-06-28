import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AsksModels } from '../../models/asksmodels';
import { AsksPage } from '../ask/ask';
import { QuestionSubmittedPage } from '../question-submitted/question-submitted';

@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage implements OnInit {
  asksmodels: AsksModels[];

  constructor(public navCtrl: NavController) {

  }
  
  ngOnInit() {
    this.asksmodels = [
      new AsksModels("Where can I get a Nao Robot for free?","FAQ","heart-outline"),
      new AsksModels("Can I take a free Oolong from the Smart Cooler?","Technical","heart-outline"),
      new AsksModels("Is it possible for me to sleep on the theatrette sofa?","Request","heart-outline"),
      new AsksModels("You have a lot of tablets, can I take one home?", "FAQ","heart-outline")
    ];
  }

  toggleFav(item:AsksModels){
    if (item.favIcon == "heart-outline")
      item.favIcon = "heart";
    else
      item.favIcon = "heart-outline";
  }

  deleteItem(item:AsksModels){
    this.asksmodels.splice(this.asksmodels.indexOf(item),1);
  }

  getItems(ev: any){
    this.ngOnInit();

    let val = ev.target.value;
    console.log("search"+val);
    if (val && val.trim() !='') {
      this.asksmodels = this.asksmodels.filter(item => item.ask.toLowerCase().includes(val.toLowerCase()) ||
      item.askcategory.toLowerCase().includes(val.toLowerCase())
      )
    }
  }

  goToQuestionDetail(params){
    if (!params) params = {};
    this.navCtrl.push(QuestionSubmittedPage, params);
  }

  goToAskQuestion(){
    this.navCtrl.push(AsksPage);
  }


}
