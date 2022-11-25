import { Component, OnInit } from '@angular/core';
import { ClienteObserverServicoService } from 'src/app/service/clienteObserverServico.service';

@Component({
  selector: 'app-cliente-notificacao',
  templateUrl: './cliente-notificacao.component.html',
  styleUrls: ['./cliente-notificacao.component.css']
})
export class ClienteNotificacaoComponent implements OnInit {

  constructor(public clienteObserverServicoService: ClienteObserverServicoService) {
  }

  ngOnInit(): void {
  }

}
