import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SECTION_B } from '../application/section-b/section-b.constants';

@Component({
  selector: 'app-application-input',
  templateUrl: './application-input.component.html',
  styleUrls: ['./application-input.component.scss']
})
export class ApplicationInputComponent implements OnInit, AfterViewInit {

  form: FormGroup = new FormGroup({});
  number: number;

  sectionA: {} = {
    name: 'luke',
    number_field: 12,
    email: 'luk@po.pl',
    nip: '234',
    regon: '12'
  };

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.form.valueChanges.subscribe(() => {
      console.log(this.form);
    });
    const number = this.form.get('sectionA').get(SECTION_B.NUMBER_FIELD.NAME);
    number.valueChanges.subscribe((value) => {
      this.number = value;
    });
  }


}
