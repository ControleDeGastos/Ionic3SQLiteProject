import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { SQLiteObject } from '@ionic-native/sqlite';


@Injectable()
export class LancamentosProvider {

  constructor(private dbProvider: DatabaseProvider) {
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

  edit(conta){

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



