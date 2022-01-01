import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import motaFigma from "../../assets/mota-figma.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Portfolio() {
	return (
		<Container id="portfolio">
			<h2>My Portfolio</h2>

			<div className="projects">
				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<div className="body">
							<img src={motaFigma} height={400}></img>
							<h3>FCallendar</h3>
							<p>
								Uma aplicação Web realizada durante o Hackathon do programa de formação da{" "}
								<a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar
								na volta do trabalho remoto para o presencial.
							</p>
						</div>
						<footer>
							<ul className="tech-list">
								<li>Node</li>
								<li>Express</li>
								<li>MySql</li>
								<li>Ejs</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<div className="body">
							{/* <iframe
								style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
								width="300"
								height="300"
								src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1XfZ0zvUuQCqI4NvmLhxxB%2FUntitled%3Fpage-id%3D0%253A1%26node-id%3D2%253A2"
								allowFullScreen
                title="figma"
							></iframe> */}
							<img
								src={motaFigma}
								height={400}
								onClick={() =>
									window.open(
										"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1XfZ0zvUuQCqI4NvmLhxxB%2FUntitled%3Fpage-id%3D0%253A1%26node-id%3D2%253A2",
									)
								}
							></img>
							<h3>FCallendar</h3>
							<p>
								Uma aplicação Web realizada durante o Hackathon do programa de formação da{" "}
								<a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar
								na volta do trabalho remoto para o presencial.
							</p>
						</div>
						<footer>
							<ul className="tech-list">
								<li>Node</li>
								<li>Express</li>
								<li>MySql</li>
								<li>Ejs</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<div className="body">
							<img src={motaFigma} height={400}></img>
							<h3>FCallendar</h3>
							<p>
								Uma aplicação Web realizada durante o Hackathon do programa de formação da{" "}
								<a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar
								na volta do trabalho remoto para o presencial.
							</p>
						</div>
						<footer>
							<ul className="tech-list">
								<li>Node</li>
								<li>Express</li>
								<li>MySql</li>
								<li>Ejs</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>
			</div>
		</Container>
	);
}
