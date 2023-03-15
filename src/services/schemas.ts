import Joi from 'joi';

const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required()
    .messages({
      'array.base': '422|"productsIds" must be an array',
      'array.min': '422|"productsIds" must include only numbers',
      'any.required': '400|"productsIds" is required',
    }),
});

const productSchema = Joi.object({
  name: Joi.string().min(3).required()
    .messages({
      'string.base': '422|"name" must be a string',
      'string.min': '422|"name" length must be at least 3 characters long',
      'any.required': '400|"name" is required',
    }),
  amount: Joi.string().min(3).required()
    .messages({
      'string.base': '422|"amount" must be a string',
      'string.min': '422|"amount" length must be at least 3 characters long',
      'any.required': '400|"amount" is required',
    }),
});

export { productSchema, orderSchema };