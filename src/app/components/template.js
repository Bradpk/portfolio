'use client'

import { motion } from 'framer-motion'

export default function Template({ children }) {
    return (
        <motion.div
            initial={{ x: 0, opacity: 0}}
            animate={{ x: 0, opacity: 1, transition: { duration: 1.5} }}
        >
            {children}
        </motion.div>
    )
}
