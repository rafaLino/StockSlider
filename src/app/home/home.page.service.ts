import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Stock } from '../core/entities/stock.model';
import { AppState } from '../core/states';
import { StockActions } from '../core/states/stock/stock.actions';
import { StockSelectors } from '../core/states/stock/stock.selectors';
import { ModalService } from '../shared/modal/service/modal.service';

@Injectable()
export class HomePageService {

    constructor(
        private modalService: ModalService,
        private store: Store<AppState>
    ) { }


    async addStock() {
        await this.modalService.openStockModal();
    }

    getStocks(): Observable<Stock[]> {
        this.store.dispatch(StockActions.get());
        return this.store.select(StockSelectors.AsList);
    }
}