import { BitlyClient } from "bitly";
const bitly = new BitlyClient("963ddf0ef3436b4477aab0c9d50bacc2bb451782", {});
console.log(process.env.BITLY_GENERTIC_ACCESS_TOKEN);

export const shortenUrl = async (longUrl: string): Promise<string> => {
  let result;
  try {
    result = await bitly.shorten("https://github.com/tanepiper/node-bitly");
  } catch (e) {
    throw e;
  }
  return result.link;
};

// function bitlyGenerate(longUrl: string): string {
//   let shortUrl;
//   (async () => {
//     let shortUrl = await bitlyGenerate(longUrl);
//     return shortUrl;
//   })();
//   return await shortUrl;
// }
// export default bitlyGenerate;
