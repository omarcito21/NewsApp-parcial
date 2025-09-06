import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IPais } from 'src/app/interfaces/pais';



@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  
  private apiUrl = 'https://countriesnow.space/api/v0.1/countries/flag/unicode';

  constructor(private http: HttpClient){ }

      getCountries(): Observable<IPais[]> {
        return this.http.get<{data: IPais[]}>(this.apiUrl).pipe(
          map(response => response.data)
        );
    }
}