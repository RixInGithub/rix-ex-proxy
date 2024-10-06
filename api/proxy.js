export const runtime = "nodejs"

export async function GET(req, res) {
	var p = new URL(req.url).search.slice(1).split("&").map(function(a){return a.split("=")})
	console.log(p)
	var r = await fetch(Object.fromEntries(p).url)
	r.headers.append("access-control-allow-origin", "*")
	return r
}