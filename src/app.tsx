import React from 'react';
import './styles/components/app.sass';
import SideBar from './components/sidebar';
import MainContent from './components/maincontent';

export default function App() {
  return (
    <div id='portifolio'>
        <h1>Lucas Kahlil</h1>
        <SideBar />
        <MainContent />
    </div>
  )
}
