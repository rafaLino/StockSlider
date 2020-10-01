import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperationModalComponent } from './operation-modal.component';

describe('OperationModalComponent', () => {
  let component: OperationModalComponent;
  let fixture: ComponentFixture<OperationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
