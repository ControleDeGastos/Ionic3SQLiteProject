import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class ContasProvider {

  list:any = [];
  database: any;

  constructor() {
    setTimeout(function() {
      this.database = new SQLite();
      let createSql = "CREATE TABLE IF NOT EXISTS contas (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT)";
      this.database.openDatabase({
        name: "data.db",
        location: "default"
      }).then(() => {
        this.database.executeSql(createSql, {}).then((data) => {
          console.log("Tabela contas criada: ", data);
        }, (error) => {
          console.error("Erro na execução da criação da tabela contas", error);
        })
      }, (error) => {
        console.error("Erro na abertura do banco de dados: contas", error);
      });
    }, 600);
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
    setTimeout(function() {
      let sqlQuery = "INSERT INTO contas (descricao) VALUES (?)";
      this.database.executeSql(sqlQuery, [conta.descricao]).then((data) => {
        conta.id = data.insertId;
        successCallBack(conta);
      }, (error) => {
        console.log("Erro na inserção da conta: " + JSON.stringify(error.err));
      });
    }, 100);
  }

  edit(conta){

  }

  delete(conta){

  }

}
