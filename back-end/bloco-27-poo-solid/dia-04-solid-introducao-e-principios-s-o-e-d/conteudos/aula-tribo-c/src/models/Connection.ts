import mysql, { Pool } from 'mysql2/promise';

class Connection {
  private static connection: Pool

  constructor() {
    Connection.connection = mysql.createPool({
      host: 'localhost',
      user: 'root' /* Se necessário, altere o user */,
      password: '13467190' /* Não se esqueça de inserir a senha aqui! */,
      database: 'solid_example',
    })
  }

  public async execute(sql: string, values: any) {
    const result = await Connection.connection.execute(sql, values);
    return result;
  }
}

export default new Connection();