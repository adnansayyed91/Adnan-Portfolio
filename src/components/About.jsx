import AdnanAbout from '../assets/AdnanAbout.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

const About = () => {
  return (

    <motion.div
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration:0.7}}
     className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
      <span className="text-neutral-700"> About</span>
        <span className="text-neutral-500"> Me</span>
      </h2>

      <div className="flex flex-wrap">
        <motion.div
         whileInView={{opacity:1 , x: 0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:0.5}}
         className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img src={AdnanAbout} alt="" className=" w-1/2 rounded-2xl" />
            </div>
        </motion.div>
        <motion.div
         whileInView={{opacity:1 ,x:0}}
         initial={{opacity:0, x:100}}
         transition={{duration:0.5}}
         className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6 text-gray-800">{ABOUT_TEXT}</p>
            </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
