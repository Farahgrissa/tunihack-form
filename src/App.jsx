import { motion } from 'framer-motion'
import TuniHackForm from './TuniHackForm'

export default function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">

      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-black backdrop-blur-md"
      />

      {/* 🔥 GLOW ANIMÉ (BONUS 2) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[140px] animate-pulse" />
      </motion.div>

      {/* FORM CONTAINER */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.85,
          rotateX: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 w-full"
      >
        <TuniHackForm />
      </motion.div>
    </div>
  )
}
