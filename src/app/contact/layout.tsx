import type { Metadata } from "next";
import { pageTitle, SITE_EMAIL, SITE_DESCRIPTION, SITE_NAME } from "../../lib/site";

export const metadata: Metadata = {
  title: pageTitle("문의하기"),
  description: `${SITE_NAME} 문의 및 피드백. 이메일: ${SITE_EMAIL}. ${SITE_DESCRIPTION}`,
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
