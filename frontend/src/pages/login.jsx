import { Link } from 'react-router-dom'
import '../pages/App.css'
import logo from '../assets/Logo.svg'

function Login() {
    return (
        <>
        <header>
            <img src={logo} alt='Logo IEES IES' />
            <div  className='navegacao'>
                <nav>
                    <ul>
                        <li> <Link className='nav-link' to="/about">SOBRE</Link> </li>
                        <li> <Link className='nav-link' to="/contact">CONTATO</Link> </li>
                        <li> <Link className='ativo' to="/account">CONTA</Link> </li>
                        <li> <Link className='nav-link' to="/">PROJETOS</Link> </li>
                    </ul>
                </nav>
            </div>
        </header>

        <div id='pagina-principal-login'>
            <div className='titulo-formulario'>
                
                <h2>Login</h2>

                <form id='form-contact' action="">
                     <div className='campo'>
                        <label htmlFor="email">E-MAIL</label>
                        <input type="text" id='email' name='email' placeholder='Exemplo@gmail.com' />
                    </div>

                    <div className='campo'>
                        <label htmlFor="senha">Senha</label>
                        <input type="text" id='senha' name='senha' placeholder='Senha' />
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

export default Login