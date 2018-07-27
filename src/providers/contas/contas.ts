//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  insert(conta){

  }

  edit(conta){

  }

  delete(conta){

  }

}
