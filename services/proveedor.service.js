const getConnection = require('../libs/postgres.js');
const pool = require('../libs/postgres.pool');

class ProveedorService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async create(data) {
    const query = 'INSERT INTO proveedores (name, ruc, direccion, estado) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [data.name, data.ruc, data.direccion, data.estado];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

  async find() {
    const query = 'SELECT * FROM proveedores';
    const result = await this.pool.query(query);
    return result.rows;
  }

  async findOne(id) {
    const query = 'SELECT * FROM proveedores WHERE id = $1';
    const result = await this.pool.query(query, [id]);
    if (result.rows.length === 0) {
      throw new Error('Proveedor no encontrado');
    }
    return result.rows[0];
  }

  async update(id, changes) {
    const fields = [];
    const values = [];
    let paramIndex = 1;

    for (const key in changes) {
      if (changes[key] !== undefined) {
        fields.push(`${key} = $${paramIndex}`);
        values.push(changes[key]);
        paramIndex++;
      }
    }

    if (fields.length === 0) {
      throw new Error('No se enviaron campos para actualizar');
    }

    values.push(id);
    const query = `UPDATE proveedores SET ${fields.join(', ')} WHERE id = $${paramIndex} RETURNING *`;

    const result = await this.pool.query(query, values);
    if (result.rows.length === 0) {
      throw new Error('Proveedor no encontrado');
    }
    return result.rows[0];
  }

  async delete(id) {
    const query = 'DELETE FROM proveedores WHERE id = $1 RETURNING *';
    const result = await this.pool.query(query, [id]);
    if (result.rows.length === 0) {
      throw new Error('Proveedor no encontrado');
    }
    return result.rows[0];
  }
}

module.exports = ProveedorService;
