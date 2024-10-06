export const runtime = "nodejs"

export async function GET(req, res) {
	return await fetch(req.query.url)
}