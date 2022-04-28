import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

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
