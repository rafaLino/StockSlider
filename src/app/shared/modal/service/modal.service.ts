import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Stock } from 'src/app/core/entities/stock.model';
import { OperationModalComponent } from '../operation-modal/operation-modal.component';
import { StockModalComponent } from '../stock-modal/stock-modal.component';

@Injectable()
export class ModalService {

  public modalRef: HTMLIonModalElement;

  constructor(private modalController: ModalController) {
  }

  async openStockModal(payload?: Stock) {
    this.modalRef = await this.modalController.create({
      component: StockModalComponent,
      cssClass: StockModalComponent.mainClass,
      componentProps: payload,
    });
    await this.modalRef.present();
  }

  async openOperationModal(payload?: any) {
    this.modalRef = await this.modalController.create({
      component: OperationModalComponent,
      cssClass: OperationModalComponent.mainClass,
      componentProps: payload,
    });
    await this.modalRef.present();

  }

  async onClose(): Promise<{ data?: any, success: boolean }> {
    const payload = await this.modalRef.onDidDismiss();
    return Promise.resolve(payload?.data || {});
  }

}
