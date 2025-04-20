import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { JSON_LIMIT, URL_ENCODED_LIMIT } from "./constants";

const app = express();
app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
	}),
);
app.use(
	express.json({
		limit: JSON_LIMIT,
	}),
);
app.use(
	express.urlencoded({
		extended: true,
		limit: URL_ENCODED_LIMIT,
	}),
);
app.use(cookieParser());
app.use(helmet());
app.use(express.static("./public"));

// routes
import getUser from "./routes/get-user.route";
app.use("/", getUser);

export { app };
