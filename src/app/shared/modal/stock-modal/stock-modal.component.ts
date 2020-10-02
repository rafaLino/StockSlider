import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Components } from '@ionic/core';
import { of } from 'rxjs';
import { Stock } from 'src/app/core/entities/stock.model';
@Component({
  selector: 'app-stock-modal',
  templateUrl: './stock-modal.component.html',
  styleUrls: ['./stock-modal.component.scss'],
})
export class StockModalComponent implements OnInit {

  static mainClass: string = 'stock-modal';
  @Input() modal: Components.IonModal;

  constructor() { }

  stocks$: Promise<Array<Stock>> = of([
    { id: "1", name: 'ITSA4', enabled: false } as Stock,
    { id: "2", name: 'MDIA3', enabled: true } as Stock,
    { id: "3", name: 'ABEV3', enabled: false } as Stock,
    { id: "4", name: 'EGIE3', enabled: true } as Stock,
  ]).toPromise();

  ngOnInit() { }

  closeModal() {
    this.modal.dismiss();
  }

  toggleEnabled(stock: Stock) {
    console.log(stock)
  }

  insert(form: NgForm) {
    if (form.valid) {
      this.modal.dismiss({
        data: {
          ...form.value,
          enabled: true
        },
        success: true
      });
    }
    else {
      form.controls.name.markAsTouched();
    }
  }
}
