import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  form: FormGroup ;
  sectionAForm: FormGroup;

  constructor() {
    this.form = new FormGroup({});
    this.sectionAForm = new FormGroup({});
  }

  ngOnInit() {
  }

  output($event: FormGroup) {
    this.sectionAForm = $event;
    console.log($event);
  }

  log() {
    this.form['sectionA'] = this.sectionAForm;
    console.log(this.form);
  }
}
