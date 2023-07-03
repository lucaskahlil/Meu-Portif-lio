import React from 'react';
import '../styles/components/sidebar.sass'
import Social from './social';
import Information from './information';

export default function SideBar() {
  return (
    <aside id='sidebar'>
        <img src="https://avatars.githubusercontent.com/u/101431445?v=4" alt="Foto Lucas Kahlil" />
        <p className='title'>Desenvolvedor Front-End | Full Stack</p>
        <Social />
        <Information />
        <p className='btn'>Download Currículo</p>
    </aside>
  )
}
