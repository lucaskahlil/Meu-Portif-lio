import React from 'react';
import '../styles/pages/app.sass'
import SideBar from '../components/sidebar';
import MainContent from '../components/maincontent';

export default function App() {
  return (
    <div id='portifolio'>
        <SideBar />
        <MainContent />
    </div>
  )
}
