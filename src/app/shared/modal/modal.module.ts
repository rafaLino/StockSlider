import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OperationModalComponent } from './operation-modal/operation-modal.component';
import { ModalService } from './service/modal.service';
import { StockModalComponent } from './stock-modal/stock-modal.component';



@NgModule({
  declarations: [
    StockModalComponent,
    OperationModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ModalService]
})
export class ModalModule { }
