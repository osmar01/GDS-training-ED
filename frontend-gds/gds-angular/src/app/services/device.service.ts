import { Device } from './../models/device';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IResponse from '../utils/IResponse';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private BASE_ENDPOINT = environment.restApiServer + `/device`;

  constructor(private http: HttpClient) { }

  getDevices(): Observable<IResponse<Device[]>> {
  const url = this.BASE_ENDPOINT;

    return this.http.get<IResponse<Device[]>>(url);
  }

  insert(device: Device): Observable<IResponse<Device>> {
    const url = this.BASE_ENDPOINT;

    return this.http.post<IResponse<Device>>(url, device);
  }

  delete(id: any): Observable<IResponse<Device>> {
    const url = this.BASE_ENDPOINT +`/${id}`;

    return this.http.delete<IResponse<Device>>(url);
  }

}
