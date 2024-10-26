// Import necessary modules
import express, { Application, Request, Response } from "express";
import user from "./modules/user/index";
import question from "./modules/question/index";

import cors from "cors";
import helmet from "helmet";
declare global {
  namespace Express {
    interface Request {
      user?: any;
      refreshTokenId: any;
    }
  }
}

const app: Application = express();

// Setup CORS
app.use(
  cors<Request>({
    origin: [
      "*",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    exposedHeaders: ["Set-Cookie"],
    credentials: true,
  })
);

// Setup Helmet for security
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  })
);

// Setup express to handle JSON and large payloads
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));


app.use("/api/v1/user", user);
app.use("/api/v1/question", question);

export default app;
