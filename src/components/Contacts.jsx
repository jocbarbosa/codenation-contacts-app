import React from "react";
import Contact from './Contact';

class Contacts extends React.Component {
	render() {
		const contacts = this.props.data;
		return (
			<div className="container" data-testid='contacts'>
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
				</section>
				{
					contacts.map(contact => {
						return <Contact
							key={contact.id}
							data={contact}
						/>
					})
				}
			</div>
		);
	}
}

export default Contacts;
