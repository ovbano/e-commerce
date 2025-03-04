const Joi = require('joi');

const id = Joi.string().uuid(); // Usamos UUID para el ID
const name = Joi.string().min(3).max(50);
const percentage = Joi.number().integer().min(0).max(100);
const start_date = Joi.date();
const end_date = Joi.date();
const status = Joi.boolean();

const createDiscountSchema = Joi.object({
  name: name.required(),
  percentage: percentage.required(),
  start_date: start_date.required(),
  end_date: end_date.required(),
  status: status.required(),
});

const updateDiscountSchema = Joi.object({
  name: name,
  percentage: percentage,
  start_date: start_date,
  end_date: end_date,
  status: status,
});

const getDiscountSchema = Joi.object({
  id: id.required(),
});

module.exports = { createDiscountSchema, updateDiscountSchema, getDiscountSchema };
