import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.page.html',
  styleUrls: ['./venda.page.scss'],
})
export class VendaPage implements OnInit {

  constructor(private clienteService: HttpService,private modalCtrl: ModalController) { }
  clientes;
  ngOnInit(){
    this.getAll();
  }
  getAll(){
    this.clienteService.getAllVend().subscribe(data => {
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
    this.clienteService.excluirVenda(id).subscribe(data => {
      this.getAll();
  
    })
  }
}
