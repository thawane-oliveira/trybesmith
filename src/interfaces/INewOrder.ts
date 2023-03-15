interface INewOrder {
  error?: boolean,
  message?: string,
  status?: number,
  userId: number,
  productsIds: number[],
}

export default INewOrder;