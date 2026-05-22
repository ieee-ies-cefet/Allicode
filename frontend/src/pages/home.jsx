import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'


function Home() {
  return (
    <>
      <header>
          <img src={logo} alt='Logo IEES IES' />
          <div  className='navegacao'>
            <nav>
            <ul>
              <li> <Link className='nav-link' to="/about">SOBRE</Link> </li>
              <li> <Link className='nav-link' to="/about">CONTATO</Link> </li>
              <li> <Link className='nav-link' to="/about">CONTA</Link> </li>
              <li> <Link className='ativo' to="/">PROJETOS</Link> </li>
            </ul>
          </nav>
          </div>
      </header>


      <section>
        <div id='conteudo'> {/* Inicio Conteudo */}
          <h1>BEM-VINDO</h1>
          <p>
            A <span>IEEE IES</span> transforma desafios em soluções de tecnologia. <br></br>
            Ao seu dispor.
          </p>
          <div id='projetos'> {/* Inicio Projetos */}

            {/* inicio Card 1 */}
            <div className='card'> 
              <div className='bloco'>
                        
              </div> 
              <div> 
                <h4>Automoção Industrial</h4>
                <p>Desenvolvemos sistemas que solucionam desafios de automação industrial</p>
              </div> 
            </div>
            {/* Fim Card 1 */}

            {/* inicio Card 2 */}
            <div className='card'> 
              <div className='bloco'>
                      
              </div> 
              <div> 
                <h4>Cibersegurança</h4>
                <p>Temos como um dos focos de estudo contribuir para a cibersegurança</p>
              </div> 
            </div>
            {/* Fim Card 2 */}

            {/* inicio Card 3 */}
            <div className='card'> 
              <div className='bloco'>
                     
              </div> 
              <div> 
                <h4>Jogos Nativos e Desktop</h4>
                <p>Cobrimos todas as etapas do desenvolvimento de jogos para celular e desktop</p>
              </div> 
            </div>
            {/* Fim Card 3 */}

            {/* inicio Card 4 */}
            <div className='card'> 
              <div className='bloco'>
                     
              </div> 
              <div> 
                <h4>Jogos Nativos e Desktop</h4>
                <p>Cobrimos todas as etapas do desenvolvimento de jogos para celular e desktop</p>
              </div> 
            </div>
            {/* Fim Card 4 */}

         </div>{/* Fim projetos */}

        </div>{/* Fim Conteudo */}
        

      </section>

      <footer className='rodape'>
        <p>CEFET - RJ | IEEE IES | 2026</p>
      </footer>

  </>
  )
}

export default Home