import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Films() {
	return (
		<Container id="Films`">
			<h2>My Films</h2>

			<div className="projects">
				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<iframe
					
							src="https://www.youtube.com/embed/Cvvzq5yIEB8"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>

						<div className="body">
							<h3>Video Topic</h3>
						</div>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="flipInX">
					<div className="project">
						<iframe
						
							src="https://www.youtube.com/embed/Cvvzq5yIEB8"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>

						<div className="body">
							<h3>Video Topic</h3>
						</div>
					</div>
				</ScrollAnimation>
			</div>
		</Container>
	);
}
