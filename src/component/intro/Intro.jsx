'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import  { motion, useAnimation } from 'framer-motion'

import styles from './Intro.module.css';
import logo from '../../media/refriLogo.jpg'

const Intro = () => {

  const [title, setTitle] = useState('El Ayudante');
  const [subTitle, setSubTitle] = useState('Instalaciones de Aire Acondicionado');
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      handleChangeText();
    }, 5000)

    return () => clearInterval(interval);
  })


  const handleChangeText = async () => {
    await controls.start({ opacity: 0, y: -20 });
    setTitle(title === 'El Ayudante' ? 'Refrigeracion': 'El Ayudante');
    setSubTitle(subTitle === 'Instalaciones de Aire Acondicionado' ?'Reparacion de Heladeras': 'Instalaciones de Aire Acondicionado');
    await controls.start({ opacity: 1, y: 0 });
  };

  return (
    <div className={styles.container} id='intro'>

    <Image src={logo} alt='x' className={styles.logo} />

      <div className={styles.content}>

      <motion.h1
        className={styles.title}
        animate={controls}
        transition={{ duration: 1}}
        onClick={handleChangeText}
      >
        {title}
      </motion.h1>

      <motion.h2
        className={styles.subtitle}
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.3 }}
        onClick={handleChangeText}
      >
        {subTitle}
      </motion.h2>

        <div className={styles.buttoms}> 
          <a href="#contact">Contacto</a>
          <a href="#servicios">Servicios</a>
          <a href="#presentation">Conocenos</a>
        </div>

      </div>

      <video
        src={require('../../media/backgroundVideo.mp4')}
        autoPlay
        muted
        loop
        className={styles.video} />

    </div>
  )
}


export default Intro