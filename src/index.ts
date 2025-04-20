import { connect } from "./db/connect";
import { app } from "./app";

async function main() {
	await connect();
	app.listen(process.env.PORT, () => {
		console.log(`⚙️  Server running on http://localhost:${process.env.PORT}/`);
	});
}
main();
