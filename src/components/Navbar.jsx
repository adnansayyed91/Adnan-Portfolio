import logo from "../assets/logo/logo-transparent.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center logo">
        <img className="mx-4 w-40 " src={logo} alt="logo"/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">

      <a href="https://www.linkedin.com/in/adnan-sayyed92/" target="_blank"><FaLinkedin className="text-black" /></a>

      <a href="https://github.com/adnansayyed91" target="_blank"><FaGithub className="text-black" /></a>

      <a href="https://www.instagram.com/the_adnan_92?utm_source=qr&igsh=OXVyZmxtNHlqYjQz" target="_blank"><FaInstagram className="text-black" /></a>
      </div>
    </nav>
  )
}

export default Navbar
