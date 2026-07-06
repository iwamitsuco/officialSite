import NotFound from "@/app/not-found";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "404",
  description: "ページが見つかりません。",
  path: "/404"
});

export default NotFound;
