export const runtime = "nodejs"

export async function GET(req, res) {
	console.log("req is", Object.keys(req))
	console.log("res is", Object.keys(res))
	return await fetch(req.query.url)
}