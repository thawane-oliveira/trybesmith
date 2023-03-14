import IProduct from '../interfaces/IProduct';
import connection from './connection';

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.products;');
  return rows as IProduct[];
};

const xablau = () => null;

export { getAll, xablau };
