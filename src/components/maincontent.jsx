import React from 'react'
import '../styles/components/maincontent.sass';
import Profile from './profile';
import Tecnology from './tecnology';
import Projects from './projects';

export default function MainContent() {
  return (
    <main id='main-content'>
        <Profile />
        <Tecnology />
        <Projects />
    </main>
  )
}
