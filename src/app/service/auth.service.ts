import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../components/records/records-list';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api= 'http://localhost:3000/signup'; 
  employeeApi = "http://localhost:3000/employee"
  constructor(private http:HttpClient) { }

  GetAll():Observable<Object>{
    return this.http.get<Employee[]>(this.employeeApi);
  }

  CreateUser(inputdata:Employee):Observable<Object>{
    return this.http.post(this.employeeApi, inputdata);
  }
  Getbycode(code:any):Observable<Object>{
    return this.http.get<Employee[]>(this.api+'/'+code);
  }

  proceedSingup(inputdata:any):Observable<Object>{
    return this.http.post(this.api, inputdata);
  }

  updateUser(data:any):Observable<Object>{
    return this.http.put(this.employeeApi+'/'+data.id, data);
  }

  editUser(id:any):Observable<Object>{
    return this.http.get(this.employeeApi+'/'+id);
  }


  RemoveData(id: any):Observable<Object>{
    return this.http.delete(this.employeeApi+'/'+id);
  }

  isLoggedIn(){
    return sessionStorage.getItem('userName')!=null;
  }

}
