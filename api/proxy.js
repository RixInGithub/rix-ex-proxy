export async function GET(req, res) {
	return await fetch(req.params.url)
}