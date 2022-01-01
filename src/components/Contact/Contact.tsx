import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
	return (
		<Container id="contato">
			<header>
				<h2>Contact me</h2>
				<p>If you've seen my potential or want to talk to me, don't hesitate to text me.</p>
			</header>
			<div className="contacts">
				<div>
					<img src={emailIcon} alt="Email" />
					<a href="mailto:lostroverabi@gmail.com">lostroverabi@gmail.com</a>
				</div>
				{/* <div>
					<img src={phoneIcon} alt="Email" />
					<a href="tel:+5531981213843">(31) 98121-3843</a>
				</div> */}
			</div>
			<Form></Form>
		</Container>
	);
}
