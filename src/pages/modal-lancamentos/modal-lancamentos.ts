import { LancamentosProvider } from './../../providers/lancamentos/lancamentos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Lancamentos } from '../../providers/lancamentos/lancamentos';
import { ContasProvider } from './../../providers/contas/contas';
import { LancamentosPage } from '../lancamentos/lancamentos';


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
    public toast: ToastController,
    private  providerLancamento: LancamentosProvider

  ) {
    this.classe = new Lancamentos();
    this.getAllContas();
  }

  ionViewDidLoad() {

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
    this.view.dismiss();
  }

  salvar(){
    this.salvarConta()
    .then(() => {
      this.toast.create({ message: 'Lançamento salvo.', duration: 3000, position: 'botton' }).present();
      this.navCtrl.pop();
      this.navCtrl.push(LancamentosPage);
    })
    .catch(() => {
      this.toast.create({ message: 'Erro ao salvar a lançamento', duration: 3000, position: 'botton' }).present();
    });
    this.view.dismiss();
  }

  private salvarConta(){
    return this.providerLancamento.insert(this.classe);
  }

}
