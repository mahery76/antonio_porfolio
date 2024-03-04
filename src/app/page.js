import Intro from "./_contents/2_IntroSection/Intro";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
const Navigation = dynamic(() => import('./_contents/1_NavigationsSection/Navigation'),{ ssr: false })

export default function Home() {
  return (
  <main>
    <Navigation />
    <Intro />
  </main>
  )
}
