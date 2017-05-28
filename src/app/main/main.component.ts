import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApplicationStateService } from './application/application-state.service';
import { ApplicationInputStateType } from './application-input-decorator-example/ApplicationInputStateType';
import { ApplicationInputStateService } from './application-input-decorator-example/application-input-state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  isOpen: boolean;
  isOpenApplicationInput: boolean;
  testData: Map<string, Object> = new Map();
  private isHidden = false;
  private isHiddenApplicationInput = false;

  constructor(private applicationStateService: ApplicationStateService,
              private applicationInputStateService: ApplicationInputStateService) {
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

  openApplicationInput(state) {
    this.applicationInputStateService.applicationInputStateType = state;
    this.isOpenApplicationInput = true;
  }

  closeApplicationInput() {
    this.applicationInputStateService.applicationInputStateType = 'CLOSE';
    this.isOpenApplicationInput = false;
  }

  hideShowApplicationInput() {
    this.isHiddenApplicationInput = !this.isHiddenApplicationInput;
  }

}
