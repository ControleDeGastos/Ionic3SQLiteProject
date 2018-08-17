import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { ModalContasPage } from '../modal-contas/modal-contas';
import { ContasProvider } from './../../providers/contas/contas';
import { Conta } from '../../providers/contas/contas';



@IonicPage()
@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {

  listaContas: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public providerContas: ContasProvider,
    public modalCtrl: ModalController,
    private toast: ToastController

  ) {
    this.getAllContas();
  }

  ionViewDidEnter() {
    this.getAllContas();
  }

  public getAllContas(){
    this.providerContas.getList()
    .then((result:any) => {
      this.listaContas = result;
    })
    .catch(() => {
      this.toast.create({message: 'Erro ao carregar contas', duration:3000, position: 'botton'}).present();
    })
  }

  edit(){

  }



  insert(){
    let modal = this.modalCtrl.create(ModalContasPage);

    modal.present();
  }

  removerContas(conta: Conta){
    this.providerContas.remove(conta.id)
    .then(() => {
      var index = this.listaContas.indexOf(conta);
      this.listaContas.splice(index, 1);
      this.toast.create({ message: 'Conta Removida', duration: 3000, position: 'botton' }).present();
    });
  }

}
