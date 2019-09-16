import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { ProductRoutes } from "./routes/index";


class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
  }
  private config(): void {
    //setting
    this.app.set("port", process.env.port || 5000);
    //middlewares
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(cors());
    //routes
    this.app.use("/api", ProductRoutes);
    //store public file
    this.app.use("/public", express.static(path.resolve("public")));
  }
}

export default new App().app;
