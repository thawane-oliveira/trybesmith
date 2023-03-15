interface IProduct {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
  error?: boolean,
  message?: string,
  status?: number,
}

export default IProduct;