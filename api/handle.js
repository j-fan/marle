const fetchOpengraph = require('fetch-opengraph');

export default async function handler(request, response) {
  const {url} = request.query;
  if (!url) {
    response.status(422);
  } else {
    try {
      const targetUrl = new URL(url).search.replace(/^\?url=/, "")
      const data = await fetchOpengraph.fetch(targetUrl);

      response.status(200).json({ body: data });
    } catch (e) {
      response.status(422).json({ body: e.toString() });
    }
  }
}

