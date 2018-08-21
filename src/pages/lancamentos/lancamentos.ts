import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { SQLiteObject } from '@ionic-native/sqlite';


@IonicPage()
@Component({
  selector: 'page-lancamentos',
  templateUrl: 'lancamentos.html',
})
export class LancamentosPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dbProvider: DatabaseProvider

  ) {

    dbProvider.criarDatabase();
  }

  insert(lancamento:Lancamentos){
    return this.dbProvider.getDB()
    .then((db: SQLiteObject) => {
      let sql = 'insert into lancamento (descricao, valor, data, conta, entradaSaida, pago) values (?, ?, ?, ?, ?, ?)';
      let data = [lancamento.descricao];
      return db.executeSql(sql, data)

      .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LancamentosPage');
  }

}

export class Lancamentos{
  id: number;
  descricao:string;
  valor:number;
  data: string;
  conta: string;
  entradaSaida: string;
  pago: string;
}
