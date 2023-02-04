export default {
  // "domain": rsshub_domain,
  "domain": process.env.rsshub_domain,
  "rss2json": {
    "method": "get",
    "url": "https://api.rss2json.com/v1/api.json",
    "params": {
      "rss_url": "",
      "api_key": process.env.rss2json_api_key,
      "order_by": "pubDate",
      "count": 5
    }
  }
}

