import React from 'react'
import '../styles/components/information.sass'
import { AiOutlineMail, AiFillEnvironment, AiOutlineWhatsApp } from 'react-icons/ai'

export default function Information() {
  return (
    <section id='information'>
        <div className='infor-card'>
            <AiOutlineWhatsApp id='phone-icon'/>
            <div>
                <h3>Telefone</h3>
                <p>+55 (84) 98726-5840</p>
            </div>
        </div>

        <div className='infor-card'>
            <AiOutlineMail id='mail-icon'/>
            <div>
                <h3>E-Mail</h3>
                <p>kahlilpereira@gmail.com</p>
            </div>
        </div>

        <div className='infor-card'>
            <AiFillEnvironment id='pin-icon'/>
            <div>
                <h3>Localização</h3>
                <p>Mossoró - RN</p>
            </div>
        </div>
    </section>
  )
}
