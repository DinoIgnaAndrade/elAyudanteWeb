'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from './Contact.module.css';
import warning from '../../media/warning.jpg';
import map from '../../media/map.jpg';

import { FaWhatsapp } from 'react-icons/fa';
import { PiFanFill } from "react-icons/pi";


const Contact = () => {

    return (
        <div id="contact" className={styles.container} >

            <h1 className={styles.title}>Contacto</h1>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity }} >
                <PiFanFill className={styles.fan} />
            </motion.div>

            <div className={styles.contactContainer}>

                <div className={styles.contactLink}>
                    <h3>Somos de Lomas de Zamora </h3>
                    <Image src={map} alt='x' className={styles.map} />

                    <Link className={styles.link} href="https://wa.me/+5491137839288">
                        <FaWhatsapp className={styles.iconLink} />
                        <p>Llámanos +54 9 11 3783-9288 </p>
                    </Link>
                </div>

                <div className={styles.imageContainer}>
                    <Image src={warning} alt='x' className={styles.wImage} />
                    <p className={styles.text}>¡No hacemos trabajos en alturas, es decir equipos colgado al vacio!</p>
                </div>

            </div>

        </div>
    )
}

export default Contact;