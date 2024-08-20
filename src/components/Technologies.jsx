import { RiReactjsFill } from "react-icons/ri"
import { RiJavascriptFill } from "react-icons/ri"
import { RiJavaFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { motion } from "framer-motion"


const iconVariants = (duration) => ({
  initial: {y:-10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})



const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.7}}
      className="my-20 text-center text-4xl text-neutral-700">Technologies</motion.h2>

      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
      
      className="flex flex-wrap items-center justify-center gap-4">

      <motion.div
       variants={(iconVariants(2.5))}
       initial="initial"
       animate="animate"
       className="rounded-2xl border-4 border-neutral-500 p-4">
            <SiHtml5 className="text-7xl text-red-500"/>
        </motion.div>

        <motion.div
        variants={(iconVariants(3))}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-500 p-4">
            <SiCss3 className="text-7xl text-blue-500"/>
        </motion.div>

        <motion.div
        variants={(iconVariants(5))}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-500 p-4">
            <RiJavascriptFill className="text-7xl text-yellow-400"/>
        </motion.div>

        <motion.div
        variants={(iconVariants(2))}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-500 p-4">
            <SiTypescript className="text-7xl text-cyan-500"/>
        </motion.div>

        <motion.div
        variants={(iconVariants(6))}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-500 p-4">
            <RiReactjsFill className="text-7xl text-cyan-400"/>
        </motion.div>

        <motion.div
        variants={(iconVariants(4))}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-500 p-4">
            <RiJavaFill className="text-7xl text-blue-700"/>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies
