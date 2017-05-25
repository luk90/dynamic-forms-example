import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ApplicationStateType} from './application-state-type';


@Injectable()
export class ApplicationStateService {

  private _applicationMap: Map<string, Object> = new Map<string, Object>();

  private applicationState: Subject<Map<string, Object>> = new Subject<Map<string, Object>>();

  private _applicationStateType: ApplicationStateType;

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

  get applicationStateType(): ApplicationStateType {
    return this._applicationStateType;
  }

  set applicationStateType(value: ApplicationStateType) {
    this._applicationStateType = value;
  }

  get applicationMap(): Map<string, Object> {
    return this._applicationMap;
  }

  set applicationMap(value: Map<string, Object>) {
    this._applicationMap = value;
  }
}
