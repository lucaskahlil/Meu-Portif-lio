import '../styles/components/sidebar.sass'
import Social from './social';
import Information from './information';

export default function SideBar() {
  
  // const urlToDownload = "https://drive.google.com/uc?export=download&id=1OEDkLNgMcr8Ws-ulGNIHoRAxCSTZy20v"
  
  return (
    <aside id='sidebar'>
        <img src="https://avatars.githubusercontent.com/u/101431445?v=4" alt="Foto Lucas Kahlil" />
        <h2 className='name'>Lucas Kahlil</h2>
        <p className='title'>Desenvolvedor Front-End | Full Stack</p>
        <Social />
        <Information />
        <a className='btn' href="https://drive.google.com/uc?export=download&id=1OEDkLNgMcr8Ws-ulGNIHoRAxCSTZy20v" >Download Currículo</a>
    </aside>
  )
}
