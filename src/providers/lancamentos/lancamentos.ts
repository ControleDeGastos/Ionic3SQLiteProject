import { Injectable } from "@angular/core";
import { DatabaseProvider } from "../database/database";
import { SQLiteObject } from "@ionic-native/sqlite";

@Injectable()
export class LancamentosProvider {
  constructor(private dbProvider: DatabaseProvider) {
    dbProvider.criarDatabase();
  }

  insert(lancamento: Lancamentos) {
    return this.dbProvider
      .getDB()
      .then((db: SQLiteObject) => {
        let sql =
          "insert into lancamento (descricao, valor, data, conta, entradaSaida, pago) values (?, ?, ?, ?, ?, ?)";
        let data = [lancamento.descricao];
        return db
          .executeSql(sql, data)

          .catch(e => console.error(e));
      })
      .catch(e => console.error(e));
  }

  edit(conta) {

  }

  getList() {
    return this.dbProvider.getDB()
    .then((db: SQLiteObject) => {
      let sql = "SELECT * from lancamentos";

      return db.executeSql(sql, [])

        .then((data: any) => {
          if (data.row.lenght > 0) {
            let dados: any[] = [];

            for (var i = 0; i < data.row.lenght; i++) {
              var dado = data.row.item(i);
              dados.push(dado);
            }
            return dados;
          } else {
            return [];
          }
        })

        .catch(e => console.error(e));
    });
  }
}

export class Lancamentos {
  id: number;
  descricao: string;
  valor: number;
  data: string;
  conta: string;
  entradaSaida: string;
  pago: string;
}
