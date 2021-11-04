const https = require("https"); // or 'https' for https:// URLs
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const urls = [
  // "https://znaki-drogowe.pl/znaki-ostrzegawcze",
  // "https://znaki-drogowe.pl/znaki-drogowe-poziome",
  // "https://znaki-drogowe.pl/znaki-drogowe-zakazu",
  // "https://znaki-drogowe.pl/znaki-nakazu",
  // "https://znaki-drogowe.pl/znaki-informacyjne",
  // "https://znaki-drogowe.pl/znaki-dodatkowe",
  // "https://znaki-drogowe.pl/znaki-uzupelniajace",
  // "https://znaki-drogowe.pl/znaki-kierunku-miejscowosci",
  // "https://znaki-drogowe.pl/sygnalizacja-swietlna",
  "https://znaki-drogowe.pl/tabliczki-do-znakow",
];

// urls.map((url) => {
//   const fileName = `${url.split("/").pop()}.html`;
//   const file = fs.createWriteStream(fileName);
//   console.log(fileName);
//   const request = https.get(url, async function (response) {
//     await response.pipe(file);
//   });
// });
// const data = [];
// urls.map((url) => {
//   const fileName = `./${url.split("/").pop()}.html`;
//   JSDOM.fromFile(fileName).then((dom) => {
//     dom.window.document.querySelectorAll("div.table-row").forEach((row) => {
//       console.log(row.innerHTML);
//       const obj = {};
//       try {
//         obj.src = `https://ltesty.pl/images/znaki/znaki/big/${row.querySelector(".serial").innerHTML}.png`;
//         obj.serial = row.querySelector(".serial") ? row.querySelector(".serial").innerHTML : "BRAK KLASY SERIAL";
//         obj.title = row.getElementsByTagName("img")[0].title;
//         obj.visit = row.querySelector(".visit") ? row.querySelector(".visit").innerHTML : "BRAK KLASY VISIT";
//         obj.percentage = row.querySelector(".percentage")
//           ? row.querySelector(".percentage").innerHTML
//           : "BRAK KLASY PERCENTAGE";
//         data.push(JSON.stringify(obj));
//       } catch (e) {
//         console.log(e);
//       }
//     });

//     fs.writeFileSync(fileName.replace(".html", ".json"), `[${data}]`);
//     console.log(data.length);
//   });
// });
const axios = require("axios");

// const fetch = async (url) => {
//   try {
//     const response = await axios.get(url, {
//       responseType: "arraybuffer",
//     });
//     const img = Buffer.from(response.data, "binary").toString("base64");
//     fs.writeFileSync(url.split("/").pop(), img, "base64");
//   } catch (e) {
//     // console.log(e);
//   }
// };

// urls.map((url) => {
//   const fileName = `./${url.split("/").pop()}.json`;
//   const file = fs.readFileSync(fileName);
//   JSON.parse(file).map(async (el) => {
//     fetch(el.src);
//     console.log(el.src);
//   });
// });

const znakiDrogowe = JSON.parse(fs.readFileSync("./znaki-drogowe.json"));
const result = znakiDrogowe.map((el) => {
  const base64 = fs.readFileSync(`./${el.serial.trim()}.png`, { encoding: "base64" });
  el.base64 = `data:image/png;base64,${base64}`;
  return el;
});

fs.writeFileSync("./znaki-drogowe1.json", JSON.stringify(result));
