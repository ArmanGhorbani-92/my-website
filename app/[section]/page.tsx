import SectionClient from "./SectionClient";

export function generateStaticParams() {
  return [
    "about",
    "achievements",
    "basketball",
    "future",
    "goals",
    "learning",
    "programming",
    "projects",
    "school",
    "skills",
    "timeline",
  ].map((section) => ({
    section,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;

  return <SectionClient id={section} />;
}