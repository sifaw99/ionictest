import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private persons: any[] = [];

  constructor() { }

  getPersonn(): any[] {
    return this.persons;
  }

  addPersonn(item: any): void {
    this.persons.push(item);
  }

  removePersonn(item: any): void {
    const index = this.persons.indexOf(item);
    if (index > -1) {
      this.persons.splice(index, 1);
    }
  }
}
