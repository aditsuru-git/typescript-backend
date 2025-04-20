import { Request, Response, NextFunction, RequestHandler } from "express";
import { ApiError } from "./ApiError";

export const asyncHandler = <T extends Request = Request>(
	fn: (req: T, res: Response, next: NextFunction) => Promise<any>,
): RequestHandler => {
	return (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(fn(req as T, res, next)).catch((error) => {
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
				console.error(error);
			}

			res.status(statusCode).json(responseBody);
		});
	};
};
