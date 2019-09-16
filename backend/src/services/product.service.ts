import Product, { IProduct } from "../models/Product";
import path from 'path';
import fs from 'fs-extra'

class ProductService {
  async getAllProducts() {
    let data = await Product.find();
    return data;
  }
  async getByIdProduct(id: string) {
    let data = await Product.findById(id);
    return data;
  }
  async createProduct(data: IProduct) {
    let create = new Product(data);
    await create.save();
    return { create, message: "Product create" };
  }
  async updateProduct(id: string, data: IProduct) {
    let update = await Product.findByIdAndUpdate(id, data) as IProduct
    let dataUpdate = await Product.findById(update.id);
    return { dataUpdate, message: "Product update" };
  }
  async deleteProduct(id: string) {
    let productDelete = await Product.findByIdAndRemove(id) as IProduct;
    productDelete && await fs.unlink(path.resolve(productDelete.imagenPach))
    return { productDelete, message: "Product delete" };
  }
}

export default new ProductService();
