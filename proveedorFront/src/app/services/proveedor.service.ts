import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private _httpClient: HttpClient) { }


  private URIBase: string = "https://localhost:7267";

  getBProviderTasks(): Observable<[]> {
    const path = `${this.URIBase}//GetTasks`;
    return this._httpClient.get<[]>(path);
  }

  postProviderTasks(_taskBuyer: any): Observable<[]> {
    const path = `${this.URIBase}//PostTask`;
    return this._httpClient.post<[]>(path, _taskBuyer);
  }
}
