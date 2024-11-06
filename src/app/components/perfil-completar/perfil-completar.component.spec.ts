import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCompletarComponent } from './perfil-completar.component';

describe('PerfilCompletarComponent', () => {
  let component: PerfilCompletarComponent;
  let fixture: ComponentFixture<PerfilCompletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilCompletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCompletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
