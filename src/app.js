/**
 * @module Application
 * @description The entry point, responsible to bootstrap all components.
 * @since 0.1.0
 * @public
 */
import path from "path";
import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";

import apiRoutes from "./routes/api";
import webRoutes from "./routes/web";

/**
 * Application environment
 *
 * See https://www.npmjs.com/package/dotenv
 */
dotenv.config();

/**
 * Create a new application instance.
 */
const app = express();
app.disable("x-powered-by");

/**
 * Logger
 */
app.use(logger("dev", { skip: () => app.get("env") !== "development" }));

/**
 * View templating engine
 */
nunjucks.configure("resources/views", { autoescape: true, express: app, watch: true });
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "../public")));

/**
 * Body parser
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Session
 */
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));

/**
 * Passport
 */
app.use(passport.initialize());
app.use(passport.session());

/**
 * Routes
 */
app.use("/api/v1/", apiRoutes);
app.use("/", webRoutes);

/**
 * Log-all errors.
 */
app.use((error, request, response, next) => {
  console.error(error); // eslint-disable-line no-console
  next(error);
});

/**
 * Catch-all errors.
 */
app.use((error, request, response, next) => { // eslint-disable-line no-unused-vars
  error.status = 500;

  if (request.xhr) {
    response.status(error.status).json({ status: error.status, message: error.message, errors: error });
  }

  response
    .status(error.status)
    .type("html")
    .render("error", { message: error.message, errors: error });
});

export default app;
