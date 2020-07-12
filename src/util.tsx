// import moment from "moment";

// export function daysTill(time) {
//   var now = moment();
//   const daysTill = now.to(time, true);
//   return daysTill === "Invalid date" ? null : daysTill;
// }

// export function generateDataURI(daysTillText) {
//   const svg =
//     '<?xml version="1.0" encoding="UTF-8"?>' +
//     '<svg width="550px" height="243px" viewBox="0 0 550 243" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
//     '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
//     '<g id="counter">' +
//     '<rect id="box" stroke="#000000" stroke-width="5" fill="#FFFFFF" x="2.5" y="2.5" width="545" height="238"></rect>' +
//     '<text id="days-text" fill="#FF0000" font-family="Lato-Bold, Lato" font-size="103" font-weight="bold">' +
//     '<tspan x="99.4515" y="161">' +
//     daysTillText +
//     "</tspan>" +
//     "</text>" +
//     "</g>" +
//     "</g>" +
//     "</svg>";
//   const encodedSvg = new Buffer(svg).toString("base64");
//   const dataUri = `data:image/svg+xml;base64,${encodedSvg}`;
//   return dataUri;
// }

import { BitlyClient } from "bitly";
const bitly = new BitlyClient(process.env.BITLY_GENERTIC_ACCESS_TOKEN, {});

export function generateShortenedUrl(longUrl: string) {
  let bitlyResult = bitlyGenerate(longUrl).then((result) => {
    return result.url;
  });
  return longUrl;
  // return bitlyResult.url;
}

async function bitlyGenerate(longUrl: string) {
  let result;
  try {
    result = await bitly.shorten(longUrl);
  } catch (e) {
    throw e;
  }
  return result;
}

// async function init() {
//   let result;
//   try {
//     result = await bitly.shorten("https://github.com/tanepiper/node-bitly");
//   } catch (e) {
//     throw e;
//   }
//   return result;
// }
