import { ResultSetHeader } from 'mysql2';
import INewUser from '../interfaces/INewUser';
import connection from './connection';

const xablau = () => 'x';

const addNewUser = async (newUser: INewUser) => {
  const { username, vocation, level, password } = newUser;
  const [result] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password],
  );
  console.log(result);
  
  return { username, vocation, level, password };
};

export {
  xablau,
  addNewUser,
};
