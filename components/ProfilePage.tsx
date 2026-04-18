import type { ProfileData } from "@/lib/types";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { About } from "./About";
import { Experience } from "./Experience";
import { Products } from "./Products";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Achievements } from "./Achievements";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function ProfilePage({ data }: { data: ProfileData }) {
  const themeClass = data.accent === "amber" ? "theme-amber" : "theme-cyan";
  return (
    <div className={themeClass}>
      <Nav name={data.name} resumePdf={data.resumePdf} />
      <main>
        <Hero data={data} />
        <Contact data={data} />
        <About data={data} />
        <Experience data={data} />
        <Products data={data} />
        <Projects data={data} />
        <Skills data={data} />
        <Achievements data={data} />
      </main>
      <Footer data={data} />
    </div>
  );
}
