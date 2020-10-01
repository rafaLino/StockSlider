import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-stock-modal',
  templateUrl: './stock-modal.component.html',
  styleUrls: ['./stock-modal.component.scss'],
})
export class StockModalComponent implements OnInit {

  static mainClass: string = 'stock-modal';
  constructor(private modalService: ModalService) { }

  ngOnInit() { }

  close() {
    this.modalService.closeModal({ data: "teste", success: true })
  }

}
