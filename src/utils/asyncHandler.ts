import { ApiError } from "./ApiError";
import { Request, Response, NextFunction, RequestHandler } from "express";
export const asyncHandler =
	<U extends Request>(
		fn: (req: U, res: Response, next: NextFunction) => Promise<void>,
	): RequestHandler =>
	(req: U, res: Response, next: NextFunction) => {
		Promise.resolve(fn(req, res, next)).catch((error: unknown) => {
			const statusCode =
				error instanceof ApiError && error?.status ? error.status : 500;

			const responseBody =
				error instanceof ApiError
					? error
					: {
							status: statusCode,
							success: false,
							error: {
								code: "UNEXPECTED_ERROR",
								message: "An unexpected error occurred.",
							},
						};

			if (!(error instanceof ApiError)) {
				console.error(error, "Unexpected error caught by asyncHandler");
			}
			res.status(statusCode).json(responseBody);
		});
	};

// const adminAuthorization = asyncHandler(async (req, res, next) => {
// 	const admin = await User.findById(req.user._id);
// 	if (!admin) throw new ApiError(404, "USER_NOT_FOUND", "User not found");
// 	if (admin.role !== "admin") throw new ApiError(403, "ACCESS_DENIED", "Access denied");
// 	req.user = admin;
// 	next();
// });
