'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './Presentation.module.css';
import presentation from '../../media/presentation.jpg';


const Presentation = () => {
  return (
    <div className={styles.container} id='presentation'>

      <div className={styles.imageContainer}>

          <Image src={presentation} alt='x' className={styles.image} />

        <div className={styles.textContainer}>
          <h1 className={styles.title}>Somos Técnicos Matriculados </h1>
          <p className={styles.paragraph1}>
            Arreglamos e instalamos aire acondicionado. Arreglamos heladeras, no frost y congeladores.
            Estamos matriculasdos en caso de instalaciones de equipos nuevos.
          </p>
        </div>
      </div>

    </div>

  )
}

export default Presentation;