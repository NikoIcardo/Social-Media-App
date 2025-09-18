import express, { Express } from "express";

import { Server } from "./setupServer";
import databaseConnection from "./setupDatabse";

class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: Server = new Server(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
