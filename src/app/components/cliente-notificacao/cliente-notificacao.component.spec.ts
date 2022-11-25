import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteNotificacaoComponent } from './cliente-notificacao.component';

describe('ClienteNotificacaoComponent', () => {
  let component: ClienteNotificacaoComponent;
  let fixture: ComponentFixture<ClienteNotificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteNotificacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
