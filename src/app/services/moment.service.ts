
import { Moment } from './../Moment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl= environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/moments`

  constructor(private http:HttpClient) { }

  createMoment(formtData:FormData):Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formtData)
  }
  getMoments():Observable<Moment>{
    return this.http.get<Moment>(this.apiUrl)
  }
}
