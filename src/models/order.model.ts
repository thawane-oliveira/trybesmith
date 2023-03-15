import { ResultSetHeader } from 'mysql2';
import IOrder from '../interfaces/IOrder';
import connection from './connection';

const getAll = async () => {
  const [rows] = await connection.execute(
    `SELECT o.id,
    o.user_id as userId,
    JSON_ARRAYAGG(p.id) as productsIds FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.products as p ON o.id = p.order_id group by o.id;`,
  );
  return rows as IOrder[];
};

const addNewOrder = async (userId: number) => {
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUE (?);',
    [userId],
  );

  return insertId;
};

export { getAll, addNewOrder };
