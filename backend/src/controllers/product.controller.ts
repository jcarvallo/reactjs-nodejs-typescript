import { Request, Response } from "express";
import { ProductService } from "../services/index";

class ProductController {
  async getAll(req: Request, res: Response): Promise<Response> {
    const products = await ProductService.getAllProducts();
    return res.json(products);
  }
  async getById(req: Request, res: Response): Promise<Response> {
    let product = await ProductService.getByIdProduct(req.params.id);
    return await res.json(product);
  }
  async create(req: Request, res: Response): Promise<Response> {
    let result = await ProductService.createProduct({
      ...req.body,
      imagenPach: req.file.path
    });
    return res.json(result);
  }
  async update(req: Request, res: Response): Promise<Response> {
    let result = await ProductService.updateProduct(req.params.id, req.body);
    return res.json(result);
  }
  async delete(req: Request, res: Response): Promise<Response> {
    let result = await ProductService.deleteProduct(req.params.id);
    return res.json(result);
  }
}

export default new ProductController();
