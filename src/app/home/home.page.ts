import { Component } from '@angular/core';
import { ModalService } from '../shared/modal/service/modal.service';
import { HomePageService } from './home.page.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private pageService: HomePageService) { }


  addStock() {
    this.pageService.addStock();
  }

}
