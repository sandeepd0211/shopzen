import { Router } from "express";
import v1Router from "./v1";

const apiRouter = Router();

// Import all versions of the APIs
apiRouter.use("/v1", v1Router);

export default apiRouter;
