import React from "react"

import './style.scss'
import { FiArrowLeft } from 'react-icons/fi'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";

export default function Register() {
	return (
		<div className="register-container" >
			<div className="content" >
				<section>
					<img src={logo} alt="Logo" />

					<h1>Cadastro</h1>

					<p>Faça seu cadastro, entre na plataforma e ajude a encontrarem os casos da sua ONG.</p>

					<Link className="back-link" to="/">
						<FiArrowLeft size={16} color="#e02041"/> Não tenho Cadastro
					</Link>
				</section>
				<form>
					<input placeholder="Nome da ONG" />
					<input type="email" placeholder="E-mail" />
					<input type="tel" placeholder="Whatsapp"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
					<div className="input-group">
						<input placeholder="Cidade" />
						<input placeholder="UF" maxLength={2} style={{ width: 50, textTransform: "uppercase" }} />
					</div>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}