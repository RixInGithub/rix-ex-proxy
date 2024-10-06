export const runtime = "nodejs"

export async function GET(req, res) {
	console.log("req is", req)
	console.log("res is", res)
	return await fetch(req.query.url)
}