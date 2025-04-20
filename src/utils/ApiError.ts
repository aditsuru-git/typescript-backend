interface IApiError {
	name: "ApiError";
	status: number;
	success: false;
	error: {
		code: string;
		message: string;
	};
}

class ApiError extends Error implements IApiError {
	readonly name: "ApiError";
	readonly status: number;
	readonly success: false;
	readonly error: {
		code: string;
		message: string;
	};
	constructor(
		status: number = 500,
		code: string = "SERVER_ERROR",
		message: string = "UNHANDLED SERVER ERROR",
	) {
		super(message);
		this.name = "ApiError";
		this.status = status;
		this.success = false;
		this.error = {
			code: code,
			message: message,
		};
	}
}

export { ApiError };
