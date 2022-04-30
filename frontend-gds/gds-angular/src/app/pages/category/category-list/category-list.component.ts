import { Table } from 'primeng/table';
import { Category } from './../../../models/category';
import { CategoryService } from './../../../services/category.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, ConfirmEventType, Message, MessageService } from 'primeng/api';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  providers: [MessageService]
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  msgs: Message[] = [];

  form: FormGroup = new FormGroup({});;
  loading = false;

  @ViewChild('dt1') dt1!: Table;

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.listAll()
  }

  createForm(): void {
    this.form = this.formBuilder.group(
      {
        name: new FormControl('', Validators.required)
      }
    )
  }

  listAll(): void {
    this.categoryService.getCategories().subscribe(
      categories => {
        this.categories = categories.content;
      }
    );
  }

  delete(id: any): void {
    this.categoryService.delete(id).subscribe(
      data => {
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }]
        this.listAll();
      }
    );
  }

  confirmDelete(id: any) {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(id);
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.msgs = [{ severity: 'error', summary: 'Rejected', detail: 'You have rejected' }]
            break;
            case ConfirmEventType.CANCEL:
            this.msgs = [{ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' }]
            break;
        }
      }
    });
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }



}
