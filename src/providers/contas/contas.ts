import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class ContasProvider {

  list:any = [];

  constructor(private dbProvider: DatabaseProvider) {
    dbProvider.criarDatabase();
  }

  getList(){

  }

  insert(conta: Conta){
    return this.dbProvider.getDB()
    .then((db: SQLiteObject) => {
      let sql = 'insert into conta (descricao) values (?)';
      let data = [conta.descricao];
      return db.executeSql(sql, data)

      .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }

  edit(conta){

  }

  delete(conta){

  }

}

export class Conta{
  id:number;
  descricao:string;
}
