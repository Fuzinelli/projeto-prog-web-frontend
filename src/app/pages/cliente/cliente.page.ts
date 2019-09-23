import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  clientes;

  constructor(private clienteService: HttpService, private modalCtrl: ModalController) {    this.getAll();
  }

  ngOnInit(){
    this.getAll();
  }
  getAll(){
    this.clienteService.getAll().subscribe(data => {
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
}
