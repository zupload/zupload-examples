import { fileRouter } from "@/lib/zupload/routes";
import { createNextApiHandler } from "@zupload/nextjs";

export default createNextApiHandler({
  apiKey: process.env.ZUPLOAD_API_KEY || "",
  routes: [fileRouter],
});
