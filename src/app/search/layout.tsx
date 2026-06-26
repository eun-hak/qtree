import type { Metadata } from "next";
import { pageTitle, SITE_DESCRIPTION, SITE_NAME } from "../../lib/site";

export const metadata: Metadata = {
  title: pageTitle("검색"),
  description: `${SITE_NAME} 게시글 검색. ${SITE_DESCRIPTION}`,
  // 검색 결과는 본문 없는 목록(thin)이라 색인에서 제외, 링크는 따라가게 둠
  robots: { index: false, follow: true },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
