import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from './modal/modal.module';

const MODULES = [
  ModalModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class SharedModule { }
