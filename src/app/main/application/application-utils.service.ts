import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationUtilsService {

  constructor() {
  }

  checkIfObjectExistAndGet(map: Map<string, Object>, sectionName: string): Object {
    return map.has(sectionName) ? map.get(sectionName) : {};
  }

}
