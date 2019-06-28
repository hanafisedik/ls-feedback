import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AsksModels } from '../../models/asksmodels';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html'
})
export class AsksPage {
  categories: string[];
  asksmodels: AsksModels;
  submitted = false;

  constructor(public navCtrl: NavController) {
    this.categories = ['FAQ', 'Technical', 'Request'];
    this.asksmodels = new AsksModels ('', this.categories[0]);
  }

  get testing() { return JSON.stringify(this.asksmodels); }
  
  onSubmit(form: NgForm) {
    this.submitted = true;

    if(form.valid){
      alert('Question Submitted:'
      + "\n Your Question: " + this.asksmodels.ask
      + "\n Question Category: " + this.asksmodels.askcategory );
    }
  }
  
}
