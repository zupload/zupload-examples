import { createNextAppDirHandler } from "@zupload/nextjs";

export const POST = createNextAppDirHandler({
  apiKey: process.env.ZUPLOAD_API_KEY || "",
});
