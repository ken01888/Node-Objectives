const path = require("path");
const fs = require("fs");
const request = require("request");
const rp = require("request-promise");

const redData = path.join(__dirname, "./popular-article.json");

let arr=[]
let obj = {}

rp("https://reddit.com/r/popular.json").then((body) => {
  JSON.parse(body).data.children.map((element) => {
    ;
     obj = {
      title: element.data.title,
      author: element.data.author,
      url: element.data.url,
    };

    arr.push(obj);
});
fs.appendFileSync(redData, JSON.stringify(arr));
});

// (async () => {
//   try {
//     res = await rp("https://reddit.com/r/popular.json");
//     body = await JSON.parse(res).data.children;
//     let arr = [];

//     body.forEach((element, index) => {
//       obj = {
//         id: index,
//         title: element.data.title,
//         author: element.data.author,
//         url: element.data.url,
//       };
//       arr.push(obj);
//       fs.appendFileSync(redData, JSON.stringify(arr) + "\n");
//     });
//   } catch (error) {
//       console.log(error)
//   }
// })();
