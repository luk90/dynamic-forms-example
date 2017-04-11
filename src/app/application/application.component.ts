import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  form: FormArray = new FormArray([]);
  sectionAForm: FormGroup = new FormGroup({});

  constructor() {
  }

  ngOnInit() {
  }

  output($event: FormGroup) {
    this.sectionAForm = $event;
    console.log($event);
  }

  log() {
    this.form.push(this.sectionAForm);
    console.log(this.form);
    this.form = null;
  }
}
