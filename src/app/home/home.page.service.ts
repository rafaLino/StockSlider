import { Injectable } from '@angular/core';
import { ModalService } from '../shared/modal/service/modal.service';

@Injectable()
export class HomePageService {

    constructor(
        private modalService: ModalService,
    ) { }


    async addStock() {
        await this.modalService.openStockModal();
    }
}