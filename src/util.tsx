import { BitlyClient } from "bitly";
import { BitlyLink } from "bitly/dist/types";
import { stringify } from "querystring";
const bitly = new BitlyClient(process.env.BITLY_GENERTIC_ACCESS_TOKEN, {});

export const shortenUrl = async (longUrl: string): Promise<string> => {
  if (longUrl == "") {
    return "";
  }
  let result;
  try {
    result = await bitly.shorten(longUrl);
  } catch (e) {
    throw e;
  }
  return result.link;
};
