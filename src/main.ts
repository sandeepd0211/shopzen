import express, { Application } from "express";
import bodyParser from "body-parser";
import apiRouter from "./api";

class App {
  private static instance: App;
  private app: Application;

  private constructor() {
    this.app = express();
    this.configure();
    this.setupCoreRoutes();
  }

  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }
    return App.instance;
  }

  private configure(): void {
    // Setup DB
    // Setup middlewares
    this.app.use(bodyParser.json());
  }
  private setupCoreRoutes(): void {
    this.app.use("/api", apiRouter);
  }
  public startServer(port: number): void {
    this.app.listen(port, () => {
      console.log(`App is running in PORT=${port}`);
    });
  }
}

export default App;
