import AdminJunctionClient from "./AdminJunctionClient";

interface AdminJunctionPageProps {
  // Force params to be a Promise to match Next.js's expected type.
  params: Promise<{ route: string }>;
}

export default async function AdminJunctionPage({
  params,
}: AdminJunctionPageProps) {
  // Await params (if it's a plain object, Promise.resolve will wrap it)
  const resolvedParams = await Promise.resolve(params);
  return <AdminJunctionClient params={resolvedParams} />;
}
