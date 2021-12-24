import logo from './img/logo.svg';
import botVector from './img/bot.svg'
import balle from './img/BALLERINI.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-logo">
          <img src={logo} alt='Logo BALLERINI' />
        </div>
        <div className="header-text">
          <p>Comunidade Ballerini</p>
          <p>Tutorial</p>
          <p>Open Source</p>
          <p>Comandos</p>
        </div>
      </header>
      

      <div className="item-landing-page">
        <div className='fix-visual-errors'>
          <p className="text-principal">Balle Bot</p>
          <p className="text-secondary">Deixe a sua comunidade segura de um jeito fácil</p>
          <button className="btn-add">Me adicione</button>
        </div>
        <div>
          <img src ={botVector} alt='bot' />
        </div>
      </div>

      <div className="line-bottom-header"></div>

      <div className="details-bot">
        <p className="text-primary">O que ela faz por você?</p>
        <p className="text-secondary">1. Cria um sistema de verificação capcha para novos membros garantirem que não são robôs</p>
        <p className="text-secondary">2. Possui um sistema de banimento automático para links suspeitos que forem enviados na comunidade</p>
        <p className="text-secondary">3. Sistema de avisos e banimento manual, para pessoas administradoras utilizarem</p>
      </div>
      <div className="footer-balle">
        <img src={balle} alt='balle' />
      </div>
    </div>
  );
}

export default App;
