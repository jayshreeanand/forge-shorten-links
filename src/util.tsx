import React, { useState, useEffect, Fragment } from "react";

import { BitlyClient } from "bitly";

console.log(process.env.BITLY_GENERIC_ACCESS_TOKEN);

var accessToken = process.env.BITLY_GENERIC_ACCESS_TOKEN;
accessToken = "963ddf0ef3436b4477aab0c9d50bacc2bb451782";
const bitly = new BitlyClient(accessToken, {});

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
