import { Injectable } from '@angular/core';
import { ApplicationInputStateType } from './ApplicationInputStateType';

@Injectable()
export class ApplicationInputStateService {

  private _applicationInputStateType: ApplicationInputStateType;

  constructor() {
  }


  get applicationInputStateType(): ApplicationInputStateType {
    return this._applicationInputStateType;
  }

  set applicationInputStateType(value: ApplicationInputStateType) {
    this._applicationInputStateType = value;
  }
}
