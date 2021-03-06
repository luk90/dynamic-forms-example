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
    console.log(this.applicationStateService.applicationStateType);
    if (this.applicationStateService.applicationStateType === 'NEW') {
      this.applicationStateService.applicationMap.clear();
    }
  }

  ngAfterViewInit(): void {
    // tylko dla przykładu. Normalnie do mappera wysyłąna jest mapa.
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
