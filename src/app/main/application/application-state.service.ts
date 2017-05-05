import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

type ApplicationStateType = 'NEW' | 'EDIT' | 'CLOSE' | 'HIDDEN';

@Injectable()
export class ApplicationStateService {

  private _applicationMap: Map<string, Object> = new Map<string, Object>();

  private applicationState: Subject<Map<string, Object>> = new Subject<Map<string, Object>>();

  private _applicationStateValue: ApplicationStateType;

  applicationState$ = this.applicationState.asObservable();

  constructor() {
  }

  addFormGroup(key: string, value: Object): void {
    console.log(key, '- key, ', value, ' - value');
    this.applicationState.next(this._applicationMap.set(key, value));
    console.log(this._applicationMap, ' map');
  }

  getFormGroup(key: string): Object {
    return this._applicationMap.get(key);
  }

  removeFormGroup(key: string): void {
    this._applicationMap.delete(key);
    this.applicationState.next(this._applicationMap);
  }

  setApplicationState(map: Map<string, Object>): void {
    this._applicationMap = map;
    this.applicationState.next(this._applicationMap);
  }

  get applicationStateValue(): ApplicationStateType {
    return this._applicationStateValue;
  }

  set applicationStateValue(value: ApplicationStateType) {
    this._applicationStateValue = value;
  }

  get applicationMap(): Map<string, Object> {
    return this._applicationMap;
  }

  set applicationMap(value: Map<string, Object>) {
    this._applicationMap = value;
  }
}
