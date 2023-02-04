import fs from "fs";
import axios from "axios";
import config from './subscribe/config.js';
import source from './subscribe/source.js';

// 规范化pubDate
const getUniDate = (pubDate) => {
  const regPubDate = pubDate.match(/(\d{4})-(\d{2})-(\d{2})/);
  return regPubDate[1] + "." + regPubDate[2] + "." + regPubDate[3];
}

// 获取指定日期的标准格式
// timing：定位日期的时间戳，单位为
// day：相差天数，正负表示之前和之后
const getSpecifyUniDate = (timing, day) => {
  const preDate = new Date(timing - day * 24 * 60 * 60 * 1000).toJSON().match(/(\d{4})-(\d{2})-(\d{2})/);
  return preDate[1] + "." + preDate[2] + "." + preDate[3];
}

// 获取时间戳
const getTimestamp = (date) => {
  return Date.parse(date);
}

// 获取指定时间戳的北京时间
const getBjDate = (timestamp) => {
  return timestamp + 8 * 60 * 60 * 1000;
}

// 前一天日期
const preDate = getSpecifyUniDate(getBjDate(new Date().getTime()), 1);
// const preDate = "2023.02.02";
// 全部文章
let posts = [];


(async () => {
  let { domain, rss2json } = config;
  // rss2json.params.api_key = "jvwwour0c6ncvcqomgxjy45o2fjd0a3lfrmxhd5r";
  const { regular, self } = source;

  // regular
  for (let communityKey in regular) {
    const community = regular[communityKey];
    const { route, homeBaseUrl, accounts } = community;
    for (let accountKey in accounts) {
      const account = accounts[accountKey];
      const { author, id, tag } = account;
      const site = homeBaseUrl + id;
      const feed = domain + route + id;
      rss2json.params.rss_url = feed;
      await axios(rss2json)
        .then((response) => {
          const jsonParse = JSON.parse(JSON.stringify(response.data));
          const items = jsonParse.items;
          const targetPosts = items.filter(item => getUniDate(item.pubDate) == preDate)
          return targetPosts.map(targetPost => {
            return {
              author,
              site,
              tag,
              post: {
                title: targetPost.title,
                link: targetPost.link,
                date: getTimestamp(targetPost.pubDate)
              }
            }
          })
        }).then(regularPosts => posts = posts.concat(regularPosts))
        .catch((error) => {
          console.log(error);
        })
    }
  }

  // self
  for (let account of self) {
    const { author, site, feed, tag } = account;
    rss2json.params.rss_url = feed;
    await axios(rss2json)
      .then((response) => {
        const jsonParse = JSON.parse(JSON.stringify(response.data));
        const items = jsonParse.items;
        const targetPosts = items.filter(item => getUniDate(item.pubDate) == preDate)
        // const targetPosts = items.filter(item => uniPubDate(item.pubDate) == "2023.01.30")
        return targetPosts.map(targetPost => {
          return {
            author,
            site,
            tag,
            post: {
              title: targetPost.title,
              link: targetPost.link,
              date: getTimestamp(targetPost.pubDate)
            }
          }
        })
      }).then(selfPosts => posts = posts.concat(selfPosts))
      .catch((error) => {
        console.log(error);
      })
  }

  fs.writeFile(`./data/${preDate}.json`, JSON.stringify(posts), function (err) {
    if (err) {
      return console.error(err);
    }
  });
}
)()


