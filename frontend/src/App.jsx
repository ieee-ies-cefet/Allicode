import logo from './assets/Logo.svg'
import './App.css'

function App() {

  return (
    <>
      <header>
          <img src={logo} alt='Logo IEES IES' />
          <div  className='navegacao'>
            <nav>
            <ul>
              <li><a href="">SOBRE</a></li>
              <li><a href=""> CONTATO</a></li>
              <li><a href="">CONTA</a></li>
              <li><a href="">PROJETOS</a></li>
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
                <h4>Automoção Industrial</h4>
                <p>Desenvolvemos sistemas que solucionam desafios de automação industrial</p>
              </div> 
            </div>
            {/* Fim Card 2 */}

            {/* inicio Card 3 */}
            <div className='card'> 
              <div className='bloco'>
                     
              </div> 
              <div> 
                <h4>Automoção Industrial</h4>
                <p>Desenvolvemos sistemas que solucionam desafios de automação industrial</p>
              </div> 
            </div>
            {/* Fim Card 3 */}

            {/* inicio Card 4 */}
            <div className='card'> 
              <div className='bloco'>
                     
              </div> 
              <div> 
                <h4>Automoção Industrial</h4>
                <p>Desenvolvemos sistemas que solucionam desafios de automação industrial</p>
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

export default App
