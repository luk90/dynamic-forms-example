import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GlobalVariableService {

  variablesMap: Map<string, any>;

  private globalVariables = new Subject<Map<string, any>>();

  globalVariables$ = this.globalVariables.asObservable();

  addVariable(key: string, value: any) {
    console.log(key, '- key, ', value, ' - value');
    this.globalVariables.next(this.variablesMap.set(key, value));
    console.log(this.variablesMap, ' map');
  }

  getVariable(key: string) {
    return this.variablesMap.get(key);
  }

  constructor() {
    this.variablesMap = new Map();
  }

}
