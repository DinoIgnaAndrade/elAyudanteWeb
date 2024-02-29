'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './Cards.module.css';

const Card = ({ title, content, image }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCardClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
            <motion.div
                className={styles.card}
                animate={{
                    width: isExpanded ? 1300 : 400, 
                    height: isExpanded ? 600 : 400, 
                    transition: { duration: 0.5 } }}
                onClick={handleCardClick}
            >
                <h1>{title}</h1>
                <Image src={image} alt='x' className={styles.image} />
                {/* Contenido de la card */}
                {isExpanded && <p>{content}</p>}
            </motion.div>
    );
}

export default Card;