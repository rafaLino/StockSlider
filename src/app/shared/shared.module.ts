import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
