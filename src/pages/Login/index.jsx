import React, { useState } from "react"
import { Link, useHistory} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './style.scss'
import api from '../../services/api'
import logo from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Login () {
	const [id, setId] = useState('');

	const history = useHistory();

	function handleLogin(e) {
		e.preventDefault();

		api.post('sessions', { id }).then(
			res => {
				const { name } = res.data;

				localStorage.setItem('ongId', id);
				localStorage.setItem('ongName', name);

				history.push('/profile')
			}
		).catch(
			err => {
				alert("Falha no Login.")
			}
		)

	}

	return (
		<div className="login-container">
			<section className="form">
				<img src={logo} alt="Herois" />
				<form onSubmit={handleLogin} >
					<h1>Login:</h1>
					<input
						placeholder="Sua ID"
						value={id}
						onChange={e => { setId(e.target.value) }}
					/>
					<button className="button" type="submit">Entrar</button>
					<Link className="back-link" to="/register">
						<FiLogIn size={16} color="#e02041" /> Não tenho Cadastro
					</Link>
				</form>
			</section>
			<img src={heroesImg} alt={"Herois"} />
		</div>
	)
}
