import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ApplicationStateService } from './application-state.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit, AfterViewInit, OnDestroy {

  form: Object;
  exampleMap: Map<string, Object>;
  applicationStateSubscription: Subscription;

  constructor(private applicationStateService: ApplicationStateService) {
    this.form = {};
    this.exampleMap = new Map<string, Object>();
  }

  ngOnInit() {
    console.log(this.applicationStateService.applicationStateValue);
    if (this.applicationStateService.applicationStateValue === 'NEW') {
      this.applicationStateService.applicationMap.clear();
    }
  }

  ngAfterViewInit(): void {
    this.applicationStateSubscription = this.applicationStateService.applicationState$.subscribe(map => {
      this.form = {};
      map.forEach((value, key) => {
        this.form[key] = value;
      });
      console.log(this.form);
    });
  }

  ngOnDestroy(): void {
    console.log('usuwanie application');
    this.applicationStateSubscription.unsubscribe();
  }

}
