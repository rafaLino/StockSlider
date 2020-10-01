import { Injectable } from '@angular/core';
import { StockFirebaseService } from '../core/services/stock.firebase.service';
import { ModalService } from '../shared/modal/service/modal.service';

@Injectable()
export class HomePageService {

    constructor(
        private modalService: ModalService,
        private stockFirebaseService: StockFirebaseService
    ) { }


    async addStock() {
        await this.modalService.openStockModal();
        const { success, data } = await this.modalService.onClose();
        if (success)
            this.stockFirebaseService.create(data);

    }
}