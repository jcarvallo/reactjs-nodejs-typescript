import { Router } from "express";
import { ProductController } from "../controllers/index";
import upload from "../libs/multer";

const router = Router();

router.route("/products")
  .get(ProductController.getAll)
  .post(upload.single('image'),ProductController.create);
  
router.route("/products/:id")
  .get(ProductController.getById)
  .put(ProductController.update)
  .delete(ProductController.delete);


export default router;
