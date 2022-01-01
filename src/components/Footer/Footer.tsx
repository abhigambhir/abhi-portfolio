import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import discordIcon from "../../assets/discord.png";

export function Footer() {
	return (
		<Container className="footer">
			<a href="/" className="logo">
				<span>A</span>
				<span>Gambhir</span>
			</a>
			<div>
				{/* <p>Este site foi feito com <img src={reactIcon}/> e muito <span>❤️</span></p> */}
			</div>

			<div className="social-media">
				<a href="https://www.instagram.com/lostroverabi/" target="_blank" rel="noreferrer">
					<img src={instagramIcon} alt="Instagram" />
				</a>
			</div>
		</Container>
	);
}
