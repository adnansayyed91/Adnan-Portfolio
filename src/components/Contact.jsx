import { CONTACT } from "../constants"
import { motion } from "framer-motion"


const Contact = () => {
  return (
    <div>
      <div className="border-b border-neutral-900 pb-20">
        <motion.h2
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:0.7}}
          className="my-10 text-center text-4xl text-neutral-700">Get in Touch</motion.h2>
        <motion.div
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-50}}
         transition={{duration:1.5}}
          className="text-center tracking-tighter ">
            <p className="my-4 text-gray-600">{CONTACT.address}</p>
            <p className="my-4 text-gray-600">{CONTACT.phoneNo}</p>
            <a href="mailto: adnansayyed9221@gmail.com" className="border-b text-gray-600 underline">{CONTACT.email}</a>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
