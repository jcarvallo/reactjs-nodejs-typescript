import { Router } from "express";
import { ProductController } from "../controllers/index";
import upload from "../libs/multer";

class ProductRoutes {
  router: Router = Router();
  constructor() {
    this.routers()
  }
  routers():void{
    this.router
      .route("/products")
      .get(ProductController.getAll)
      .post(upload.single("image"), ProductController.create);

    this.router
      .route("/products/:id")
      .get(ProductController.getById)
      .put(ProductController.update)
      .delete(ProductController.delete);
  }
}

export default new ProductRoutes().router
