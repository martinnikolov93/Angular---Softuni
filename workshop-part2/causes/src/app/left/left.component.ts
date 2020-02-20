import { CausesService } from './../causes.service';
import { ICause } from './../shared/interfaces/cause';
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  get causes(){
    return this.causesService.causes;
  }

  constructor(private causesService: CausesService) { 
    
  }
  
  ngOnInit(): void {
    this.causesService.loadCauses();
  }

  selectCauseHandler(cause: ICause) {
    this.causesService.selectedCause = cause;
  }

}
