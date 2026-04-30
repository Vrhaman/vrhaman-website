import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Vrhaman Events",
  description: "Internal management dashboard for Vrhaman Campus Innovation Challenge.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
