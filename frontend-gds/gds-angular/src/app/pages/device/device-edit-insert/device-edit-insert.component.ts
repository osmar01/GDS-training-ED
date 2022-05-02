import { Category } from './../../../models/category';
import { CategoryService } from './../../../services/category.service';
import { Router } from '@angular/router';
import { DeviceService } from './../../../services/device.service';
import { Message } from 'primeng/api';
import { Device } from './../../../models/device';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-edit-insert',
  templateUrl: './device-edit-insert.component.html',
  styleUrls: ['./device-edit-insert.component.scss']
})
export class DeviceEditInsertComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  loading = false;
  device!: Device;
  msgs: Message[] = [];

  categories: Category[] = [];
  selectedCategory: Category = new Category();

  constructor(
    private formBuilder: FormBuilder,
    private deviceService: DeviceService,
    private categoryService: CategoryService,
    private router: Router,

  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.setListCategory();
  }

  createForm(): void {
    this.form = this.formBuilder.group(
      {
        name: new FormControl('', Validators.required),
        categoryId: new FormControl('', Validators.required),
        color: new FormControl('',[ Validators.required, Validators.pattern('[A-Za-z]*')]),
        partNumber: new FormControl('',  [Validators.required, Validators.pattern('[0-9]*')]),
      }
    )
  }

  setListCategory() {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data.content;
        console.log(this.categories);

      }
    );
  }

  setDevice(): void {
    this.device = new Device();
    this.device.name = this.form.get('name')?.value;
    this.device.category_id = (this.form.get('categoryId')?.value).id;
    this.device.color = this.form.get('color')?.value;
    this.device.partNumber = this.form.get('partNumber')?.value;
  }

  insert(): void {

    this.setDevice();
    this.loading = true;
    this.deviceService.insert(this.device).subscribe(
      data => {
        this.loading = false;
        this.msgs = [{ severity: 'success', summary: 'Success', detail: 'OK' }]
        setTimeout(() => {
          this.router.navigate(['device']);
        }, 2000);

      }
    );
  }
  onSubmit(form: any): void {
    if (form.valid) {
      this.insert();
    }
  }

}
