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

const updateProduct = async (productId: number, orderId: number) => {
  const [result] = await connection
    .execute('UPDATE Trybesmith.products SET order_id = ? WHERE id = ?;', [orderId, productId]);
  return result;
};

export {
  getAll,
  addNewProduct,
  updateProduct,
};
