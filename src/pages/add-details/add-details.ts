import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-details',
  templateUrl: 'add-details.html',
})
export class AddDetailsPage {

  private todo : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) { 
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      gender:[''],
      address:[''],
      dateOfBirth:[''],
      dateOfAddmisssion:[''],
      parentName:[''],
      phoneNo:[''],
      mobileNo:[''],
      description: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDetailsPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save(){
    console.log(this.todo.value);
    this.viewCtrl.dismiss();
  }

}
