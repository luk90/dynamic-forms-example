import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApplicationStateService } from './application-state.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit, AfterViewInit {

  form: Object;

  constructor(private applicationStateService: ApplicationStateService) {
    this.form = { };
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.applicationStateService.applicationState$.subscribe(map => {
      map.forEach((value, key) => {
        this.form[key] = value;
      });
      console.log(this.form);
    });
  }

  // log() {
  //   this.form['sectionA'] = this.sectionAForm;
  //   console.log(this.form);
  // }

}
