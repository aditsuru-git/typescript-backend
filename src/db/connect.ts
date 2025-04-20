import mongoose from "mongoose";

export async function connect() {
	try {
		const connectionInstance = await mongoose.connect(
			`${process.env.MONGODB_URI}/${process.env.DB}`,
		);
		console.log(
			`⚙️  Connected to DB at URI: ${connectionInstance.connection.host}\nUsing DB: ${connectionInstance.connection.name}`,
		);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}
