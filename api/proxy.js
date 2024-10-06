export const runtime = "nodejs"

export async function GET(req, res) {
	console.log(new URL(req.url).searchParams)
	return await fetch(req.query.url)
}