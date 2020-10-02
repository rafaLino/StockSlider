import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Components } from '@ionic/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/core/entities/stock.model';
import { AppState } from 'src/app/core/states';
import { StockActions } from 'src/app/core/states/stock/stock.actions';
import { StockSelectors } from 'src/app/core/states/stock/stock.selectors';
import { StockState } from 'src/app/core/states/stock/stock.state';
@Component({
  selector: 'app-stock-modal',
  templateUrl: './stock-modal.component.html',
  styleUrls: ['./stock-modal.component.scss'],
})
export class StockModalComponent implements OnInit {

  static mainClass: string = 'stock-modal';
  @Input() modal: Components.IonModal;

  public stock: Stock = new Stock();

  constructor(
    private store: Store<AppState>
  ) { }

  stocks$: Observable<Stock[]>;
  isLoading: Observable<boolean>;
  ngOnInit() {
    this.isLoading = this.store.select(StockSelectors.isLoading);
    this.stocks$ = this.store.select(StockSelectors.selectAll);
  }

  closeModal() {
    this.modal.dismiss();
  }

  toggleEnabled(stock: Stock) {
    this.store.dispatch(StockActions.update({ id: stock.id, changes: { enabled: !stock.enabled } }));
  }

  update(stock: Stock) {
    this.stock = stock;
  }

  insert(form: NgForm) {
    if (form.valid) {
      if (this.stock.id)
        this.store.dispatch(StockActions.update({ id: this.stock.id, changes: this.stock }));
      else
        this.store.dispatch(StockActions.create({ stock: this.stock }));
    }
    else {
      form.controls.name.markAsTouched();
    }
  }
}
