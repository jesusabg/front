import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompradorService {

  constructor(private _httpClient: HttpClient) { }

  private URIBase: string = "https://localhost:7086/api";

  getBuyerTasks() {
    const path = `${this.URIBase}/Buyer/GetTasks`;
    return this._httpClient.get<[]>(path);
  }

  postBuyerTasks(_taskBuyer: any) {
    const path = `${this.URIBase}/Buyer/PostTask`;
    return this._httpClient.post<any>(path, _taskBuyer);
  }
}
