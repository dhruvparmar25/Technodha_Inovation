import { redirect } from "next/navigation";

export default async function PortfolioSlugRedirectPage({ params }) {
  const { slug } = await params;
  redirect(`/projects/${slug}`);
}
