import { ResultSetHeader, RowDataPacket } from 'mysql2';
import ILogin from '../interfaces/ILogin';
import INewUser from '../interfaces/INewUser';
import connection from './connection';

const addNewUser = async (newUser: INewUser) => {
  const { username, vocation, level, password } = newUser;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password],
  );

  return { userId: insertId, username, vocation, level, password };
};

const getByName = async (credentials: ILogin) => {
  const { username, password } = credentials;
  const [[result]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?;',
    [username, password],
  );

  if (result) {
    return {
      userId: result.id, username, vocation: result.vocation, level: result.level, password,
    };
  }
  return null;
};

export {
  getByName,
  addNewUser,
};
