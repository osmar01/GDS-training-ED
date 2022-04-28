import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-edit-insert',
  templateUrl: './category-edit-insert.component.html',
  styleUrls: ['./category-edit-insert.component.scss']
})
export class CategoryEditInsertComponent implements OnInit {

    
  form: FormGroup = new FormGroup({});;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.form = this.formBuilder.group(
      {
        name: new FormControl('', Validators.required)
      }
    )
  }

  login(index: any) {
    this.loading = true;
    setTimeout(() => this.loading = false, 1000);    
  }

}
