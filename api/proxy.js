export const runtime = "nodejs"

export async function GET(req, res) {
	var r = await fetch(new URL(req.url).searchParams.get("url"))
	r.append("access-control-allow-origin", "*")
	return r
}