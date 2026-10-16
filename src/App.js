import './App.css';

function App() {
  return (
    <div className="App">
      <header className="cabecalho">
        <h1>ConectaCultura</h1>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <div className="botoes-acesso">
          <button className="botao-login">Entrar</button>
          <button className="botao-cadastro">Cadastrar</button>
        </div>
      </header>

      <main>
        <section className="inicio" id="inicio">
          <div className="conteudo-inicio">
            <p className="subtitulo">Cultura que conecta pessoas</p>

            <h2>
              Grandes ideias culturais precisam de
              <span> oportunidades.</span>
            </h2>

            <p className="descricao">
              Conectamos produtores culturais a empresas que desejam
              apoiar projetos e transformar a sociedade por meio da cultura.
            </p>

            <a href="#projetos" className="botao-principal">
              Explorar projetos
            </a>
          </div>
        </section>

        <section className="projetos" id="projetos">
          <h2>Projetos culturais</h2>

          <p>
            Descubra iniciativas culturais que precisam de apoio para
            sair do papel e alcançar mais pessoas.
          </p>

          <div className="lista-projetos">
            <article className="card-projeto">
              <span className="categoria">Música</span>
              <h3>Festival de Música Local</h3>
              <p>
                Um festival para valorizar artistas independentes e
                aproximar a comunidade da música.
              </p>
              <button>Conhecer projeto</button>
            </article>

            <article className="card-projeto">
              <span className="categoria">Arte</span>
              <h3>Arte nas Comunidades</h3>
              <p>
                Oficinas artísticas para incentivar a criatividade e
                ampliar o acesso à cultura.
              </p>
              <button>Conhecer projeto</button>
            </article>

            <article className="card-projeto">
              <span className="categoria">Literatura</span>
              <h3>Leitura para Todos</h3>
              <p>
                Uma iniciativa para incentivar a leitura e facilitar
                o acesso aos livros.
              </p>
              <button>Conhecer projeto</button>
            </article>
          </div>
        </section>

        <section className="sobre" id="sobre">
          <h2>Conectando cultura e oportunidades</h2>
          <p>
            O ConectaCultura aproxima quem desenvolve projetos culturais
            de quem deseja investir em iniciativas que geram impacto social.
          </p>
        </section>
      </main>

      <footer className="rodape">
        <p>© 2026 ConectaCultura — Cultura que transforma.</p>
      </footer>
    </div>
  );
}

export default App;
