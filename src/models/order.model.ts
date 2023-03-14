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

const xablau = () => null;

export { getAll, xablau };
