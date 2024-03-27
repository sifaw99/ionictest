import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.page.html',
  styleUrls: ['./person-add.page.scss'],
})
export class PersonAddPage implements OnInit {
  personForm!: FormGroup;
  person_firstname = '';
  person_lastname = '';
  person_age: any = null;

  constructor(private router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      'person_firstname' : [null, Validators.required],
      'person_lastname' : [null, Validators.required],
      'person_age' : [null, Validators.required]
    });
  }
  onFormSubmit() {
    this.api.addPerson(this.personForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          
          this.router.navigate(['/person-details', id]);
        }, (err: any) => {
          console.log(err);
        
        });
  }
}
