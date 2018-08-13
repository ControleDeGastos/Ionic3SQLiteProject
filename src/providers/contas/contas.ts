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
    this.list = [
      {descricao:"Alimentação"},
      {descricao:"Lazer"},
      {descricao:"Serviços"}
    ]
    return this.list;
  }

  insert(conta, successCallBack){

  }

  edit(conta){

  }

  delete(conta){

  }

}
