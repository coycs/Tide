export default {
  // "domain": rsshub_domain,
  "domain": rsshub_domain,
  "rss2json": {
    "method": "get",
    "url": "https://api.rss2json.com/v1/api.json",
    "params": {
      "rss_url": "",
      "api_key": rss2json_api_key,
      "order_by": "pubDate",
      "count": 5
    }
  }
}

