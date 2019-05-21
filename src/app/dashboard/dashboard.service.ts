import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  constructor(private http: HttpClient) { 

  }
  getDetails(){

    return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
    
  }
  postDetails(obj){
        return this.http.post('https://jsonplaceholder.typicode.com/posts/', obj).toPromise();

  }
  deleteDetails(id){
    console.log('kjhghj', id);
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id).toPromise();

  }

  putDetails(obj) {
        return this.http.put('https://jsonplaceholder.typicode.com/posts/' + obj.id , obj).toPromise();
  }

}