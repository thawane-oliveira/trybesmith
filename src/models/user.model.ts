import { ResultSetHeader, RowDataPacket } from 'mysql2';
import ILogin from '../interfaces/ILogin';
import INewUser from '../interfaces/INewUser';
import connection from './connection';

const addNewUser = async (newUser: INewUser) => {
  const { username, vocation, level, password } = newUser;
  await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password],
  );

  return { username, vocation, level, password };
};

const getByName = async (credentials: ILogin) => {
  const { username, password } = credentials;
  const [[result]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?;',
    [username, password],
  );
  return { username, vocation: result.vocation, level: result.level, password };
};

export {
  getByName,
  addNewUser,
};
