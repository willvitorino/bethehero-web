import React from "react"
import { Link } from 'react-router-dom'

import { FiLogIn } from 'react-icons/fi'

import './style.scss'
import logo from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

class Login extends React.Component {

	render() {
		return (
			<div className="login-container">
				<section className="form">
					<img src={logo} alt={"Herois"} />

					<form>
						<h1>Login:</h1>
						<input placeholder="Sua ID" />
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
}

export default  Login
