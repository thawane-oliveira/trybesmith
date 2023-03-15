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

const userSchema = Joi.object({
  username: Joi.string().min(3).required()
    .messages({
      'string.base': '422|"username" must be a string',
      'string.min': '422|"username" length must be at least 3 characters long',
      'any.required': '400|"username" is required',
    }),
  vocation: Joi.string().min(3).required()
    .messages({
      'string.base': '422|"vocation" must be a string',
      'string.min': '422|"vocation" length must be at least 3 characters long',
      'any.required': '400|"vocation" is required',
    }),
  level: Joi.number().positive().greater(0).required()
    .messages({
      'number.base': '422|"level" must be a number',
      'number.positive': '422|"level" must be greater than or equal to 1',
      'any.required': '400|"level" is required',
    }),
  password: Joi.string().min(8).required()
    .messages({
      'string.base': '422|"password" must be a string',
      'string.min': '422|"password" length must be at least 8 characters long',
      'any.required': '400|"password" is required',
    }),
});

export { productSchema, orderSchema, userSchema };