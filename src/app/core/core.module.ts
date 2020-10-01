import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { OperationFirebaseService } from './services/operation.firebase.service';
import { StockFirebaseService } from './services/stock.firebase.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    StockFirebaseService,
    OperationFirebaseService
  ]

})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
