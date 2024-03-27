import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Person} from '../person';
@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.page.html',
  styleUrls: ['./person-detail.page.scss'],
})
export class PersonDetailPage implements OnInit {
  person: any;

  constructor(public api: ApiService,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.getPerson();
  }
  async getPerson() {
      await this.api.getPerson(this.route.snapshot.paramMap.get('id'))
        .subscribe((res: any) => {
          console.log(res);
          this.person = res;
        }, (err: any) => {
          console.log(err);
        });
    }
    async deletePerson(id: any) {
      await this.api.deletePerson(id)
        .subscribe((res: any) => {
          this.router.navigate([ '/home' ]);
        }, (err: any) => {
          console.log(err);
        });
    }
    editPerson(id: any) {
      this.router.navigate([ '/person-edit', id ]);
    }
  }

