interface IApiResponse<T = unknown> {
	status: number;
	success: boolean;
	message: string;
	data: T;
}

class ApiResponse<T = unknown> implements IApiResponse<T> {
	readonly status: number;
	readonly success: boolean;
	readonly message: string;
	readonly data: T;
	constructor(
		status: number = 200,
		message: string = "success",
		data: T = null,
	) {
		this.status = status;
		this.success = this.status < 400;
		this.message = message;
		this.data = data;
	}
}

export { ApiResponse };
