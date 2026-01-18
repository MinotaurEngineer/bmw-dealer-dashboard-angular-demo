import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {
  private http = inject(HttpClient);

  getAll(): Observable<any> {
    return this.http.get('/api/vehicles');
  }

  getById(id: string): Observable<any> {
    return this.http.get(`/api/vehicles/${id}`);
  }
}
