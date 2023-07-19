import React from 'react'
import '../styles/components/social.sass'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Social() {
  return (
    <section id='social-net'>
        <a id='Linkedin' className="social-btn" href="https://www.linkedin.com/in/lucas-kahlil/" target='_blank' > < FaLinkedinIn /> </a>
        <a id='Github' className="social-btn" href="https://github.com/lucaskahlil" target='_blank' > < FaGithub /> </a>
        <a id='Instagram' className="social-btn" href="https://instagram.com/kahlilmedeiros" target='_blank' > < FaInstagram /> </a>
    </section>
  )
}
