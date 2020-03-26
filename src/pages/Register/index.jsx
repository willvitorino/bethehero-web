import React, { useState } from "react"

import './style.scss'
import api from '../../services/api'
import logo from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from "react-router-dom"

export default function Register() {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ whatsapp, setWhatsapp ] = useState('');
	const [ city, setCity ] = useState('');
	const [ uf, setUf ] = useState('');

	const history = useHistory();

	function handleRegister(e) {
		e.preventDefault();

		const data = { name, email, whatsapp, city, uf };

		api.post('ongs', data).then(
			res => {
				alert(`Seu ID de acesso: ${res.data.id}`);
				history.push('/')
			}
		).catch(
			err => {
				alert("Erro no cadastro, tente novamente.")
			}
		)
	}
	
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
				<form onSubmit={handleRegister} >
					<input
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder="Nome da ONG"
					/>
					<input
						value={email}
						onChange={e => setEmail(e.target.value)}
						type="email"
						placeholder="E-mail"
					/>
					<input
						value={whatsapp}
						onChange={e => setWhatsapp(e.target.value)}
						type="tel"
						placeholder="Whatsapp"
						pattern="[0-9]{2} [9]{1} [0-9]{4}-[0-9]{4}"
					/>
					<div className="input-group">
						<input
							value={city}
							onChange={e => setCity(e.target.value)}
							placeholder="Cidade"
						/>
						<input
							value={uf}
							onChange={e => setUf(e.target.value)}
							placeholder="UF"
							maxLength={2}
							style={{ width: 70, textTransform: "uppercase" }}
						/>
					</div>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}