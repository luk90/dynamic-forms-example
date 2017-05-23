import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApplicationStateService } from './application/application-state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  isOpen: boolean;
  testData: Map<string, Object> = new Map();
  private isHidden = false;

  constructor(private applicationStateService: ApplicationStateService) {
    this.testData.set('sectionB', {nip: '12345678', numberField: 23});
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.applicationStateService.applicationMap = this.testData;
  }

  openApplication(state) {
    this.applicationStateService.applicationStateType = state;
    this.isOpen = true;
  }

  closeApplication() {
    this.applicationStateService.applicationStateType = 'CLOSE';
    this.isOpen = false;
  }

  hideShowApplication() {
    this.isHidden = !this.isHidden;
  }

}
