import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { SessaoService } from './service/sessao.service';
import { Isessao } from './service/isessao';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.scss']
})
export class SessaoComponent implements OnInit{
  ngOnInit(): void { this.listar()}
  
  produtos: Isessao[] = [];

  constructor(private service: SessaoService) { }

  listar() {
    this.service.listar().subscribe(dados => this.produtos = dados)
  }
  
  Comprar() {
    Swal.fire({
      title: "Voce deseja comprar esse produto?",
      showDenyButton: true,
      icon:"question",
      confirmButtonText: "Sim",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Produto adicionado ao carrinho", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro ao adicionar ao carrinho", "", "error");
      }
    });
    
  }
}
