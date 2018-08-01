import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class ContasProvider {

  list:any = [];

  constructor() {

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
