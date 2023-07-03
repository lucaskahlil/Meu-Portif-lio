import React from 'react'
import '../styles/components/social.sass'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Social() {
  return (
    <section id='social-net'>
        <a id='Linkedin' className="social-btn" href=""> < FaLinkedinIn /> </a>
        <a id='Github' className="social-btn" href=""> < FaGithub /> </a>
        <a id='Instagram' className="social-btn" href=""> < FaInstagram /> </a>
    </section>
  )
}
