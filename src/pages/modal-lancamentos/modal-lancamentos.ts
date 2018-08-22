import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Lancamentos } from '../../providers/lancamentos/lancamentos';
import { ContasProvider } from './../../providers/contas/contas';


@IonicPage()
@Component({
  selector: 'page-modal-lancamentos',
  templateUrl: 'modal-lancamentos.html',
})
export class ModalLancamentosPage {

  view: any;

  classe: Lancamentos;

  contas: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public providerContas: ContasProvider,
    public toast: ToastController

  ) {
    this.classe = new Lancamentos();
    this.getAllContas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalLancamentosPage');
  }

  public getAllContas(){
    this.providerContas.getList()
    .then((result:any)=>{
      this.contas = result;
    })
    .catch(()=>{
      this.toast.create({message: 'Erro ao carregar as categorias', duration: 3000, position: 'botton'}).present();
    })
  }

  cancel(){

  }

  salvar(){

  }

}
