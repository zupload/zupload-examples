import { createZuploadRoute } from "@zupload/nextjs";

// Used on the server
export const fileRouter = createZuploadRoute<Request>()
  .route("files")
  // Set a maxfile size of 1GB
  .maxFileSize(1024 * 1024 * 1024)
  // Accept all files
  .fileTypes(["*"])
  .bucketKey(process.env.NEXT_PUBLIC_ZUPLOAD_BUCKET_KEY!);

// Used on the client
export const fileRouterConfig = fileRouter.getClientConfig();
