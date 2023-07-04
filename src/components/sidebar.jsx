import React from 'react';
import '../styles/components/sidebar.sass'
import Social from './social';
import Information from './information';

export default function SideBar() {
  return (
    <aside id='sidebar'>
        <img src="https://pps.whatsapp.net/v/t61.24694-24/312268831_132452082933383_8141149107245479203_n.jpg?ccb=11-4&oh=01_AdQUBHbPSTWxfGiGDgGc_HgHOawv8uw5Jm1apGDikxu73w&oe=64B05DBF" alt="Foto Lucas Kahlil" />
        <h2 className='name'>Lucas Kahlil</h2>
        <p className='title'>Desenvolvedor Front-End | Full Stack</p>
        <Social />
        <Information />
        <p className='btn'>Download Currículo</p>
    </aside>
  )
}
