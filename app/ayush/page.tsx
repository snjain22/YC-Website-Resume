import type { Metadata } from "next";
import { ProfilePage } from "@/components/ProfilePage";
import { ayush } from "@/data/ayush";

export const metadata: Metadata = {
  title: `${ayush.name} — Portfolio`,
  description: ayush.tagline,
  openGraph: {
    title: `${ayush.name} — Portfolio`,
    description: ayush.tagline,
    type: "profile",
  },
};

export default function AyushPage() {
  return <ProfilePage data={ayush} />;
}
