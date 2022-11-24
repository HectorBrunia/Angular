import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Phone } from './phone-list/phone';
const URL ='https://62b9f7e1ff109cd1dc9ec4cd.mockapi.io/comentarios'

@Injectable({
  providedIn: 'root'
})
export class PhoneDataService {

  constructor(private http: HttpClient) { }

  public getAll():Observable<Phone[]>{
    return this.http.get<Phone[]>(URL)
           .pipe(
            tap((phones: Phone[])=> phones.forEach(phone => phone.quantity=0))
          );
  }

  public updatePhone(phone:Phone):Observable<Phone>{
    return this.http.put<Phone>(URL+'/'+phone.id,phone)
  }
}
