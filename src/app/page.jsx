import styles from './page.module.css'
import Intro from '../component/intro/Intro'
import Presentation from '@/component/presentation/Presentation'
import Contact from '@/component/contact/contact'
import Services from '@/component/servi/Services'

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro/>
      <Presentation/>
      <Services/>
      <Contact />
    </main>
  )
}
 