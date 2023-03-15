import Joi from 'joi';

const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required()
    .messages({
      'array.base': '422|"productsIds" must be an array',
      'array.min': '422|"productsIds" must include only numbers',
      'any.required': '400|"productsIds" is required',
    }),
});

const productSchema = null;

export { productSchema, orderSchema };