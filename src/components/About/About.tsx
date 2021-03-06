import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import mota from "../../assets/mota.jpeg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
	return (
		<Container id="sobre">
			<div className="about-text">
				<ScrollAnimation animateIn="fadeInLeft">
					<h2>About Me</h2>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
					<p>I'm a sample 1</p>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="fadeInLeft"
					delay={0.4 * 1000}
					style={{ marginTop: "2rem", marginBottom: "2rem" }}
				>
					<p>I'm a sample 2 </p>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
					<p>I'm a sample 3</p>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
					<h3>My Capabalities</h3>
				</ScrollAnimation>
				<div className="hard-skills">
					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
							<img src={reactIcon} alt="React" />
						</ScrollAnimation>
					</div>

					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
							<img src={vueIcon} alt="Vue" />
						</ScrollAnimation>
					</div>

					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
							<img src={jsIcon} alt="JavaScript" />
						</ScrollAnimation>
					</div>

					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
							<img src={htmlIcon} alt="Html" />
						</ScrollAnimation>
					</div>

					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
							<img src={cssIcon} alt="Css" />
						</ScrollAnimation>
					</div>
					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
							<img src={nodeIcon} alt="Node" />
						</ScrollAnimation>
					</div>

					<div className="hability">
						<ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
							<img src={typescriptIcon} alt="Typescript" />
						</ScrollAnimation>
					</div>
				</div>
			</div>
			<div className="about-image">
				<ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
					<img
						src={mota}
						alt="Imagem de perfil"
					/>
				</ScrollAnimation>
			</div>
		</Container>
	);
}
