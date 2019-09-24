import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
  clientes;
  constructor(private clienteService: HttpService, private modalCtrl: ModalController) { }

  ngOnInit(){
    this.getAll();
  }
  getAll(){
    this.clienteService.getAllProd().subscribe(data => {
      this.clientes = data;
    })
}
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  excluir(id){
    this.clienteService.excluirProduto(id).subscribe(data => {
      this.getAll();
  
    })
  }
}
