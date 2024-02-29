'use client'
import styles from './page.module.css'
import Intro from '../component/intro/Intro.jsx'
import Presentation from '@/component/presentation/Presentation.jsx'
import Contact from '@/component/contact/Contact.jsx'
import Services from '@/component/servi/Services.jsx'

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
 