import type { Metadata } from "next";
import { pageTitle, SITE_DESCRIPTION, SITE_NAME } from "../../lib/site";

export const metadata: Metadata = {
  title: pageTitle("검색"),
  description: `${SITE_NAME} 게시글 검색. ${SITE_DESCRIPTION}`,
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
