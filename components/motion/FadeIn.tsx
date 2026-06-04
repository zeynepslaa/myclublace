'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
}

/**
 * Ultra-slow editorial fade-in.
 * Used for hero elements, nav, and above-fold content.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 2.4,
  y = 0,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // editorial ease
      }}
    >
      {children}
    </motion.div>
  )
}
