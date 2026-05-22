import { Link } from 'react-router-dom'
import '../pages/App.css'
import logo from '../assets/Logo.svg'

function About(){

    return(
        <>
        <header>
            <img src={logo} alt='Logo IEES IES' />
            <div  className='navegacao'>
                <nav>
                    <ul>
                      <li> <Link className='nav-link' to="/about">SOBRE</Link> </li>
                      <li> <Link className='nav-link' to="/about">CONTATO</Link> </li>
                      <li> <Link className='nav-link' to="/about">CONTA</Link> </li>
                      <li> <Link className='nav-link' to="/">PROJETOS</Link> </li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}

export default About