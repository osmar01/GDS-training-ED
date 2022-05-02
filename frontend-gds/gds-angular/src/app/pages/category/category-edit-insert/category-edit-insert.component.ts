import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { Category } from './../../../models/category';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-edit-insert',
  templateUrl: './category-edit-insert.component.html',
  styleUrls: ['./category-edit-insert.component.scss']
})
export class CategoryEditInsertComponent implements OnInit {


  form: FormGroup = new FormGroup({});
  loading = false;
  category!: Category;
  msgs: Message[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,

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

  setCategory(): void {
    this.category = new Category();
    this.category.name = this.form.get('name')?.value;
  }

  insert(): void {
    this.setCategory();
    this.loading = true;
    this.categoryService.insert(this.category).subscribe(
      data => {
        this.loading = false;
        this.msgs = [{ severity: 'success', summary: 'Success', detail: 'OK' }]
        setTimeout(() => {
          this.router.navigate(['category']);
        }, 1500);

      }
    );
  }

  onSubmit(form: any): void {
    if (form.valid) {
      this.insert();
    }
  }
}
