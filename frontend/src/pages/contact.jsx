import { Link } from 'react-router-dom'
import '../pages/App.css'
import logo from '../assets/Logo.svg'

function Contact() {
    return (
        <>
        <header>
            <img src={logo} alt='Logo IEES IES' />
            <div  className='navegacao'>
                <nav>
                    <ul>
                        <li> <Link className='nav-link' to="/about">SOBRE</Link> </li>
                        <li> <Link className='ativo' to="/contact">CONTATO</Link> </li>
                        <li> <Link className='nav-link' to="/account">CONTA</Link> </li>
                        <li> <Link className='nav-link' to="/">PROJETOS</Link> </li>
                    </ul>
                </nav>
            </div>
        </header>

        <div id='area-principal-account'>
            <div className='titulo-formulario'>
                
                <h2>DADOS DE CADRASTO</h2>

                <form id='form-contact' action="">
                    <div className='campo'>
                        <label htmlFor="nome">NOME</label>
                        <input type="text" id='nome' name='nome' placeholder='Lionel Messi' />
                    </div>
                    
                    <div className='campo'>
                        <label htmlFor="email">E-MAIL</label>
                        <input type="text" id='email' name='email' placeholder='Exemplo@gmail.com' />
                    </div>

                    <button id='alterar-senha'>Alterar Senha</button>

                    <div className='campo-texto'>
                        <textarea name="chamada" id="chamada" placeholder='PERFIL'></textarea>
                    </div>

                    <button className='botao' type='submit'>ENVIAR</button>

                </form>{/* Fim formulário */}
            </div>{/* Fim Fale Conosco */}
        </div>{/* Fim Area-Principal */}

        
      <footer className='rodape'>
        <p>CEFET - RJ | IEEE IES | 2026</p>
      </footer>                
        
        </>
    )
}

export default Contact