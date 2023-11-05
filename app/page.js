import Hero from './_components/Hero/Hero'
import Second from './_components/Second/Second'
import styles from './page.module.css'

export default function Home() {
  return (
    <section className={styles.landing}>
      <Hero/>
      <Second/>
    </section>
  )
}
