import type { Metadata } from "next";
import { ProfilePage } from "@/components/ProfilePage";
import { sambhav } from "@/data/sambhav";

export const metadata: Metadata = {
  title: `${sambhav.name} — Portfolio`,
  description: sambhav.tagline,
  openGraph: {
    title: `${sambhav.name} — Portfolio`,
    description: sambhav.tagline,
    type: "profile",
  },
};

export default function SambhavPage() {
  return <ProfilePage data={sambhav} />;
}
