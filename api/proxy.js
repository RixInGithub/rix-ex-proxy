module.exports = {
	GET: async function(req, res) {
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
		return new Response(await r.text(), {...r})
	},
	runtime: "nodejs"
}