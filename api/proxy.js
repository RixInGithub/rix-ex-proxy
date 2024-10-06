export const runtime = "nodejs"

export async function GET(req, res) {
	console.log(Object.keys(req))
	return await fetch(req.query.url)
}