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
  constructor(public modalController: ModalController) {
    
  }



 

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

}
