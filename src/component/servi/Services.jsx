'use client'
import { motion } from 'framer-motion';

import styles from './Services.module.css';
import Card from '../cards/Cards';

import clean from '../../media/cleanAir.jpg';
import repair from '../../media/repairAir.jpg';
import install from '../../media/installation.jpg';
import analysis from '../../media/analysis.jpg';

const Services = () => {

    const limpieza = {
        titulo: 'Limpieza De Aires',
        contenido: 'Es el desarme del equipo y la limpieza de piezas y componenetes. Al estar limpio el aire puede funcionar de forma mas eficiente.',
    }
    const reparacion = {
        titulo: 'Reparación De Equipos',
        contenido:'Despues del analisis tecnico llevamos a cabo las reparaciones necesarias. Nuestro objetivo es asegurar que su equipo funcione de manera eficiente y brinde el rendimiento óptimo.',
    };
    const instalacion = {
        titulo: 'Instalacion de Aires',
        contenido: 'Instalamos los aires en 3hs aprox, sin que aparezcan contratiempos. Ademas, si el cliente lo desea, realizamos el certificado de instalacion para su garantia.',
    }
    const analisis = {
        titulo: 'Analisis Tecnico',
        contenido: 'Verificamos el mal funcionamiento de su aire analizando: fugas, cortocircuitos y otro problemas que pueda presentar. Realizamos ficha tecnicas en caso de ser necesaria',
    }

    return (
        <div id="servicios" className={styles.container}>

            <h1 className={styles.title}>Nuestros Servicios</h1>

            <div className={styles.servicesContainer}>
                <Card title={limpieza.titulo} content={limpieza.contenido} image={clean}/>
                <Card title={reparacion.titulo} content={reparacion.contenido} image={repair}/>
                <Card title={instalacion.titulo} content={instalacion.contenido} image={install}/>
                <Card title={analisis.titulo} content={analisis.contenido} image={analysis}/>
            </div>

        </div>
    )
}

export default Services;