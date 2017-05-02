import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ApplicationStateService {

  private applicationMap: Map<string, FormGroup> = new Map<string, FormGroup>();

  private applicationState: Subject<Map<string, FormGroup>> = new Subject<Map<string, FormGroup>>();

  applicationState$ = this.applicationState.asObservable();

  constructor() {
  }

  addFormGroup(key: string, value: FormGroup) {
    console.log(key, '- key, ', value, ' - value');
    this.applicationState.next(this.applicationMap.set(key, value));
    console.log(this.applicationMap, ' map');
  }

  getFormGroup(key: string) {
    return this.applicationMap.get(key);
  }

  removeFormGroup(key: string): void {
    this.applicationMap.delete(key);
    this.applicationState.next(this.applicationMap);
  }

}
