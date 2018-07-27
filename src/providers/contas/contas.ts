import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ContasProvider Provider');
  }

  getList(){

  }

  insert(conta){

  }

  edit(conta){

  }

  delete(conta){

  }

}
