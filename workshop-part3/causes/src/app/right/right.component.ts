import { CausesService } from './../causes.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  @ViewChild("amountInput", {static: false}) amountInput: ElementRef<HTMLInputElement>;
  @ViewChild("collectedAmount", {static: false}) collectedAmount: ElementRef<HTMLSpanElement>;

  get color(){
    if (this.selectedCause.collectedAmount >= this.selectedCause.neededAmount){
      return "green";
    } else if (
      this.selectedCause.collectedAmount < 2 * (this.selectedCause.neededAmount / 3) &&
      this.selectedCause.collectedAmount > (this.selectedCause.neededAmount / 3)
    ){
      return "yellow";
    } else if (this.selectedCause.collectedAmount < this.selectedCause.neededAmount){
      return "red";
    }
    return null;
  }

  get selectedCause(){
    return this.causesService.selectedCause;
  }

  constructor(private causesService: CausesService) { }

  ngOnInit(): void {
  }

  makeDonation(amountInput: number) {
  
    this.causesService.donate(+this.amountInput.nativeElement.value).subscribe(() => {
      this.collectedAmount.nativeElement.textContent = +this.collectedAmount.nativeElement.textContent + +this.amountInput.nativeElement.value + "";
      //this.causesService.loadCauses();
      this.amountInput.nativeElement.value = "";
    });
  }

}
