import express from "express";
import App from "./main";

const app = App.getInstance();
const PORT = new Number(process.env.PORT || 5000).valueOf();
app.startServer(PORT);
