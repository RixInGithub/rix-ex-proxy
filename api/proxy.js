export const runtime = "nodejs"

export async function GET(req, res) {
	var p = Object.fromEntries(new URL(req.url).search.slice(1).split("&").map(function(a){return a.split("=")}))
	var u = decodeURIComponent(p.url)
	console.log(u)
	var r = await fetch(u)
	r.headers.append("access-control-allow-origin", "*")
	return r
}