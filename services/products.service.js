const boom = require('boom');

const { models } = require('../libs/sequelize');
const { where } = require('sequelize');
class ProductsService {
  constructor() {
    this.products = [];
  }


  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category', 'discount'],
      where: {

      }
    };

    const { limit, offset } = query;

    if (limit && offset) {
      options.offset = offset;
      options.limit = limit;
    }
    const { price } = query;
    if (condition) {
      options.where.price = price;
    }

    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    const productsId = await models.Product.findByPk(id, {include: ['category', 'discount']});
    return productsId;
  }

  async update(id, changes) {
    console.log(`Updating product with ID: ${id}`); // Log para depuración
    const product = await this.findOne(id);
    console.log(`Product found: ${JSON.stringify(product)}`); // Log para depuración
    const updatedProduct = await product.update(changes);
    return updatedProduct;
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
