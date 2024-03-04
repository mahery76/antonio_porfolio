import IntroSection from "./_contents/2_IntroSection/IntroSection";
import AboutMeSection from "./_contents/3_AboutMeSection/AboutMeSection";
import SkillsSection from "./_contents/4_SkillSection/SkillsSection";
import ProjectContents from "./_contents/5_ProjectSection/ProjectContents";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
const NavigationSection = dynamic(() => import('./_contents/1_NavigationsSection/NavigationSection'),{ ssr: false })

export default function Home() {
  return (
  <main>
    <NavigationSection />
    <IntroSection />
    <AboutMeSection />
    <SkillsSection />
    <ProjectContents />
  </main>
  )
}
