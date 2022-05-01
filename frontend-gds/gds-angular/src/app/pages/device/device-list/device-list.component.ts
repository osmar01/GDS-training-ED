import { DeviceService } from './../../../services/device.service';
import { Table } from 'primeng/table';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Message, ConfirmationService, ConfirmEventType } from 'primeng/api';
import { Device } from './../../../models/device';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  devices: Device[] = [];

  msgs: Message[] = [];

  form: FormGroup = new FormGroup({});;
  loading = false;

  @ViewChild('dt') dt!: Table;

  constructor(
    private deviceService: DeviceService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
  ) { }

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
    this.deviceService.getDevices().subscribe(
      device => {
        this.devices = device.content;
      }
    );
  }

  delete(id: any): void {
    this.deviceService.delete(id).subscribe(
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
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
