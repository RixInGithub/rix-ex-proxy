export const runtime = "nodejs"

export async function GET(req, res) {
	console.log(req, req.url, URL)
	var r = await fetch(Object.fromEntries(new URL(req.url).search.slice(1).split("&").map(function(a){return a.split("&")})).url)
	r.headers.append("access-control-allow-origin", "*")
	return r
}