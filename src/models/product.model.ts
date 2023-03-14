import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/IProduct';
import connection from './connection';

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.products;');
  return rows as IProduct[];
};

const addNewProduct = async (newProduct: IProduct) => {
  const { name, amount } = newProduct;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );
 
  return { id: insertId, name, amount };
};

export {
  getAll,
  addNewProduct,
};
