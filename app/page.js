import Hero from './_components/Hero/hero'
import Second from './_components/Second/Second'
import styles from './page.module.css'
import Footer from './_components/Footer/Footer'

export default function Home() {
  return (
    <section className={styles.landing}>
      <Hero/>
      <Second/>
    </section>
  )
}
