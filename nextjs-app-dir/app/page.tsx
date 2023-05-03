import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import ZuploadDemo from "./zupload-demo";

export default function Home() {
  return <ZuploadDemo />;
}
