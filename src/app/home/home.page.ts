import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ModalController } from '@ionic/angular';
import { ClientePage } from '../pages/cliente/cliente.page';
import { ProdutoPage } from '../pages/produto/produto.page';
import { VendaPage } from '../pages/venda/venda.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private httpService: HttpService, public modalController: ModalController) {
    
  }

  nomeCliente;
  idCliente;
  nomeProduto;
  idProduto;
  precoProduto;
  dataVenda;
  vendaClienteId;
  idVenda;
  
 

  async abrirPaginaClientes(){
    const modal = await this.modalController.create({
      component: ClientePage
    });
    return await modal.present();
  }
  
  
  async abrirPaginaProdutos(){
    const modal = await this.modalController.create({
      component: ProdutoPage
    });
    return await modal.present();
  }
  
  async abrirPaginaVendas(){
    const modal = await this.modalController.create({
      component: VendaPage
    });
    return await modal.present();
  }


  cadastrarCliente(){
    this.httpService.cadastrarCliente(this.nomeCliente).subscribe(data => {

    })
  }
  atualizarCliente(){
    this.httpService.atualizarCliente(this.idCliente,this.nomeCliente).subscribe(data => {

    })
  }
  cadastrarProduto(){
    this.httpService.cadastrarProduto(this.nomeProduto, this.precoProduto).subscribe(data => {

    })
  }
  atualizarProduto(){
    this.httpService.atualizarProduto(this.idProduto,this.nomeProduto, this.precoProduto).subscribe(data => {

    })
  }
  cadastrarVenda(){
    this.httpService.cadastrarVenda(this.dataVenda, this.vendaClienteId).subscribe(data => {

    })
  }
  atualizarVenda(){
    this.httpService.atualizarVenda(this.idVenda,this.dataVenda, this.vendaClienteId).subscribe(data => {

    })
  }

}
