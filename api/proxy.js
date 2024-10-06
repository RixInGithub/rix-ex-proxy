module.exports = {
	async function GET(req, res) {
		var p = Object.fromEntries(new URL(req.url).search.slice(1).split("&").map(function(a){return a.split("=")}))
		var u = decodeURIComponent(p.url)
		console.log(u)
		var r = await fetch(u)
		var h = new Headers(r.headers)
		h.append("access-control-allow-origin", "*")
		h.set("access-control-allow-origin", "*")
		Object.defineProperty(r, "headers", {
			value: h
		})
		Object.defineProperty(r, "body", {
			value: await r.text()
		})
		return new Response(r.body, {...r})
	},
	runtime: "nodejs"
}