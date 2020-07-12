import { BitlyClient } from "bitly";
const bitly = new BitlyClient("963ddf0ef3436b4477aab0c9d50bacc2bb451782", {});
console.log(process.env.BITLY_GENERTIC_ACCESS_TOKEN);

// export function generateShortenedUrl(longUrl: string) {
//   bitlyGenerate(longUrl);
// }

async function bitlyGenerate(longUrl: string) {
  let result;

  try {
    result = await bitly.shorten(longUrl);
  } catch (e) {
    throw e;
  }
  return await result.url;
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

// init();

// private async shortenUrl(url: string): Promise<string> {
//   const bitlyResult = await this.bitlyClient.shorten(url);
//   if (bitlyResult) {
//       let shortUrl = (bitlyResult as any).url;
//       shortUrl = shortUrl.replace("http", "https");
//       return shortUrl;
//   } else {
//       this.logger.warn("Cannot generate bitly link");
//       return undefined;
//   }
// }

export default bitlyGenerate;
