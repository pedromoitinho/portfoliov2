import "./About.css";
import Profile from "./profile.jpg";
import CurriculoPDF from "./public/curriculo pedro final final.pdf";

const About = () => {
	return (
		<section id="about" className="about">
			<h2>Sobre Mim</h2>
			<div className="about-content">
				<div className="about-text">
					<p>
						Sou um engenheiro de software com foco em arquitetar projetos do
						completo zero, compreendendo a necessidade do cliente e escolhendo à
						tecnologia ao seu favor.
					</p>
					<div className="about-details">
						<div className="detail">
							<span className="detail-label">Nome:</span>
							<span className="detail-value">Pedro Moitinho</span>
						</div>
						<div className="detail">
							<span className="detail-label">Disponibilidade:</span>
							<span className="detail-value">Aberto para Oportunidades</span>
						</div>
					</div>
					<a href="#contact" className="btn btn-primary">
						Entre em contato
					</a>
					<a href={CurriculoPDF} download="curriculo_pedro_moitinho.pdf" className="btn btn-primary" id="curriculo">
						Currículo
					</a>
				</div>
				<div className="about-image">
					<div className="image-frame">
						<div className="image-placeholder">
							<img src={Profile} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
