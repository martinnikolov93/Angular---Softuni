import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICause } from './shared/interfaces/cause';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CausesService {
  causes: ICause[];
  selectedCause: ICause;

  constructor(private http: HttpClient) { 
    
  }

  loadCauses(){
    this.http.get<ICause[]>("http://localhost:3000/causes").subscribe(causes => {
      this.causes = causes;
    });
  }

  selectCause(id: string){
    this.http.get<ICause>(`http://localhost:3000/causes/${id}`).subscribe(cause => {
      this.selectedCause = cause;
    });
  }

  donate(amount: number){
    return this.http.patch<ICause>(`http://localhost:3000/causes/${this.selectedCause.id}`, {
        "collectedAmount": this.selectedCause.collectedAmount + amount
    })
  }
}
