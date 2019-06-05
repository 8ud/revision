import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  constructor(private http: HttpClient) { }

   public getContact() : Observable<any>{
      return this.http.get<any>('http://localhost:5544/contact').pipe(
         tap( (dataSrv)=>{
            console.log("Avant : "+ JSON.stringify(dataSrv));

         }),
      map( (dataSrv: any)=>{
         dataSrv['date_reception'] = new Date(); //ajout d'une nouvelle instance
         return dataSrv;
      }),
      tap( (dataSrv) =>{
         console.log("Apres : "+ JSON.stringify(dataSrv));
      })
      );
   }

   public setContact(ct: any): Observable<any>{

      const httpOptions = {
         headers: new HttpHeaders({
            'Content-Type' : 'application/json'
         })
      };
      return this.http.post<any>('http://localhost:5544/contact' ,
       JSON.stringify(ct),
       httpOptions);
   }

   public setContactPrm(ct: any) : Promise<any>{
      return this.http.post<any>('http://localhost:5544/contact' ,
      JSON.stringify(ct),
      {headers: {'Content-Type': 'application/json'}}
      ).toPromise();
   }

}
