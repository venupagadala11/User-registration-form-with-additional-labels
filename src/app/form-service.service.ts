import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  dataURL:string='';

  constructor(private http:HttpClient)
   {
    this.dataURL="http://localhost:3000/userDetails/";
   }

  additionalDetails:any[]=[];

  addAditionalDetails(data:object)
  {
    this.additionalDetails.push(data);
  }
  
  userDetails(data:any):Observable<any>
  {
    console.log("service",data.id);
    return this.http.post(this.dataURL,data); 
  }

  getUsers(): Observable<any>
   {
    return this.http.get(this.dataURL+"/"+2);
  }
  

  
}
