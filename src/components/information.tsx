import React from 'react'
import '../styles/components/information.sass'
import { AiOutlineMail, AiFillEnvironment, AiOutlineWhatsApp } from 'react-icons/ai'

export default function Information() {
  return (
    <section id='information'>
        <div className='infor-card'>
            <a href="https://wa.me/5584987265840?text=Oi%2C%20tudo%20bem%3F" target='_blank'><AiOutlineWhatsApp id='phone-icon'/></a>
            <div>
                <h3>Telefone</h3>
                <a href='https://wa.me/5584987265840?text=Oi%2C%20tudo%20bem%3F' target='_blank'>+55 (84) 98726-5840</a>
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
