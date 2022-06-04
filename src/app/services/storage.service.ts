import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  storage: Storage;

  constructor() {
    this.storage = window.localStorage;
   }
  
  getData(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key) || '{}');
    }
    return null;
  }

  setData(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}
