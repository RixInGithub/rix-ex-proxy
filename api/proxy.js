export const runtime = "nodejs"

export async function GET(req, res) {
	return await fetch(new URL(req.url).searchParams.url)
}