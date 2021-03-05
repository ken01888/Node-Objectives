const path = require("path");
const fs = require("fs");
const request = require("request");
const rp = require("request-promise");

const redData = path.join(__dirname, "./popular-article.json");

let obj;

(async () => {
  try {
    res = await rp("https://reddit.com/r/popular.json");
    body = await JSON.parse(res).data.children;
    body.forEach((element, index) => {
      let arr = [];
      obj = {
        id: index,
        title: element.data.title,
        author: element.data.author,
        url: element.data.url,
      };
      arr.push(obj);
      fs.appendFileSync(redData, JSON.stringify(arr) + "\n");
    });
  } catch (error) {}
})();
