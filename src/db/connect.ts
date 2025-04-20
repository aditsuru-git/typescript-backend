import mongoose from "mongoose";

export async function connect() {
	try {
		const connectionInstance = await mongoose.connect(
			`${process.env.MONGODB_URI}/${process.env.DB}`,
		);
		console.log(
			`⚙️ Connected to DB at URI: ${connectionInstance.connection.host}\n	Using DB: ${connectionInstance.connection.db}`,
		);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}
