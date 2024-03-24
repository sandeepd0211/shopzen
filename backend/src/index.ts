import dotenv from "dotenv";
import App from "./main";

dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? `.env.production`
      : `.env.development`,
});

const app = App.getInstance();
const PORT = new Number(process.env.PORT).valueOf();
app.startServer(PORT);
