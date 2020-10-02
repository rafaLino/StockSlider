import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePageService } from './home.page.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  stocks$: Observable<any>;

  constructor(private pageService: HomePageService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addStock() {
    this.pageService.addStock();
  }

}
