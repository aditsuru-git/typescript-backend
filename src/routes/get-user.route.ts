import { Router, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.route("/").get(
	asyncHandler(async (req: Request<{}, {}, { name: string }>, res) => {
		const name = req.body?.name;
		res.json("Hello World");
	}),
);

export default router;
