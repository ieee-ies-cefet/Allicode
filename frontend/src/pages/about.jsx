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
                      <li> <Link className='ativo ' to="/about">SOBRE</Link> </li>
                      <li> <Link className='nav-link' to="/contact">CONTATO</Link> </li>
                      <li> <Link className='nav-link' to="/account">CONTA</Link> </li>
              <li> <Link className='nav-link' to="/login">LOGIN</Link> </li>
                      <li> <Link className='nav-link' to="/">PROJETOS</Link> </li>
                    </ul>
                </nav>
            </div>
        </header>

        
      <section>
        <div id='area-principal-about'> {/* Inicio Conteudo */}
            <div className='texto-sobre'>
                <ul>
                    <h2>SOBRE NÓS</h2>
                    <li>
                        <p>
                        O ramo estudantil da IEEE no CEFET/RJ, campus Maria da Graça, destaca-se como um núcleo ativo de desenvolvimento acadêmico, 
                        tecnológico e profissional. Inserido em uma das mais tradicionais instituições de ensino tecnológico do Brasil, o grupo reúne 
                        estudantes interessados em computação e áreas correlatas, promovendo a integração entre teoria e prática por meio de projetos,
                        eventos e iniciativas colaborativas.
                        </p>
                    </li>
                    <li>
                        <p>
                            No contexto desse ramo, a sociedade técnica IEEE Industry Applications Society (frequentemente associada ao IES – Industrial Electronics Society)
                            atua como um dos pilares para a difusão do conhecimento voltado à aplicação da eletrônica na indústria. Suas atividades 
                            concentram-se em temas como automação industrial, sistemas embarcados, eletrônica de potência e controle, sempre alinhadas às 
                            demandas do mercado e às tendências tecnológicas contemporâneas.
                        </p>
                    </li>
                    <li>
                        <p>
                            No campus Maria da Graça, o grupo IES/IAS do IEEE promove workshops, minicursos, palestras técnicas e projetos práticos que estimulam o aprendizado
                            ativo e o desenvolvimento de habilidades essenciais, como trabalho em equipe, liderança e resolução de problemas reais. Além disso, os membros têm acesso 
                            a uma rede global de conhecimento, podendo participar de conferências, competições e programas internacionais oferecidos pelo IEEE.  
                        </p>
                    </li>
                    <li>
                        <p>
                            A atuação do IES IEEE no CEFET/RJ contribui significativamente para a formação de profissionais mais preparados e engajados, incentivando a 
                            inovação e o protagonismo estudantil. Ao conectar o ambiente acadêmico com o setor industrial, o grupo fortalece a ponte entre ensino, pesquisa
                            e aplicação prática, consolidando-se como um importante agente de transformação dentro da instituição e na comunidade ao seu redor.
                        </p>
                    </li>
                </ul>

            </div>
        </div>{/* Fim Conteudo */}


        <div id='area-valores'>
            <h3>Nossos valores</h3>
            <div id='nossos-valores'>

                <div className='valor'>
                            
                    <div className='bloco'></div> 
                    <div className='textos-valores'>
                        <h1>Traalho em equipe</h1>
                        <p>
                            Trabalhar de maneira comunicativa e integrada prezando pelo respeito para agir em prol de um objetivo em comum.
                        </p>
                    </div>

                </div>{/* Fim valor 1 */}
                <div className='valor'>
                            
                    <div className='bloco'></div> 
                    <div className='textos-valores'>
                        <h1>Pensamento disruptivo</h1>
                        <p>
                            Pensar de maneira inovadora e criativa com objetivo de desenvolver projetos técnicos e/ou sociais para impactar positivamente as pessoas a sua volta.
                        </p>
                    </div>

                </div>{/* Fim valor 2 */}
                <div className='valor'>
                            
                    <div className='bloco'></div> 
                    <div className='textos-valores'>
                        <h1>Aprendizagem evolutiva</h1>
                        <p>
                            Capacitar os membros para que estes repassem o conhecimento de forma atenciosa e com segurança.
                        </p>
                    </div>

                </div>{/* Fim valor 3 */}
                <div className='valor'>
                            
                    <div className='bloco'></div> 
                    <div className='textos-valores'>
                        <h1>Empatia</h1>
                        <p>
                            Prezamos a diversidade de pessoas e projetos com a responsabilidade de manter um ambiente confortável, acolhedor e divertido para todo.
                        </p>
                    </div>

                </div>{/* Fim valor 4 */}
                <div className='valor'>
                            
                    <div className='bloco'></div> 
                    <div className='textos-valores'>
                        <h1>Orgulho IEEE</h1>
                        <p>
                           Sentimento universal de pertencimento no qual os membros prezam de forma apaixonada pelo desenvolvimento da extensão.
                        </p>
                    </div>

                </div>{/* Fim valor 5 */}
                <div className='valor'>
                            
                    <div className='bloco'></div> 
                    <div className='textos-valores'>
                        <h1>Espírito de liderança</h1>
                        <p>
                            Desenvolver, influenciar e estimular a inteligência emocional de nossos membros, formando novos líderes.    
                        </p>
                    </div>

                </div>{/* Fim valor 6 */}

            </div>{/* Fim nossos-valores */}
        </div>{/* Fim area-valores */}
        

      </section>

      
      <footer className='rodape'>
        <p>CEFET - RJ | IEEE IES | 2026</p>
      </footer>
        </>
    )
}

export default About