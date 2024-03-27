import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Person } from '../person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage   {
  items!: any[];
  newPersonName: string;
  newPersonLastName: string;
  newPersonAge: string;

  constructor(private http: HttpClient,  public api: ApiService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute,
    private personService: PersonService, 
    private navCtrl: NavController) {
      this.newPersonName = '';
      this.newPersonLastName = '';
      this.newPersonAge = '';
    }
    ionViewDidEnter() {
      this.items = this.personService.getPersonn();
    }
    addItem() {
      if (this.newPersonName.trim() !== '') {
        const newItem = { name: this.newPersonName };
        const newItem1 = { name: this.newPersonLastName };
        const newItem2 = { name: this.newPersonAge };
        this.personService.addPersonn(newItem);
        this.personService.addPersonn(newItem1);
        this.personService.addPersonn(newItem2);
        this.newPersonName = '';
      }
    }
  
    removeItem(item: any) {
      this.personService.removePersonn(item);
    }
  
    editItem(item: any) {
      item.isEditing = true;
    }
  
    saveItem(item: any) {
      item.isEditing = false;
    }
  
    navigateToItemDetail(item: any) {
  
    }
    
    persons: Person[] = [];
    async getPersons() {
      await this.api.getPersons()
        .subscribe((res: Person[]) => {
          this.persons = res;
          console.log(this.persons);
        }, (err: any) => {
          console.log(err);
        
        });
    }
}
