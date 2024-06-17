import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasEscuchadasComponent } from './mas-escuchadas.component';

describe('MasEscuchadasComponent', () => {
  let component: MasEscuchadasComponent;
  let fixture: ComponentFixture<MasEscuchadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasEscuchadasComponent]
    });
    fixture = TestBed.createComponent(MasEscuchadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
