import { createNextApiHandler } from "@zupload/nextjs";

export default createNextApiHandler({
  apiKey: process.env.ZUPLOAD_API_KEY || "",
});
