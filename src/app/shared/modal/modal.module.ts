import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './service/modal.service';
import { StockModalComponent } from './stock-modal/stock-modal.component';
import { OperationModalComponent } from './operation-modal/operation-modal.component';



@NgModule({
  declarations: [
    StockModalComponent,
    OperationModalComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ModalService]
})
export class ModalModule { }
