import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">pm</div>
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Pedro Moitinho. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">Sobre</a>
            <a href="#experience">Experiências</a>
            <a href="#education">Educação</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
