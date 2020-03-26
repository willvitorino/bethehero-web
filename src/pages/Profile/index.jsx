import React from "react"
import './style.scss'

import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from 'react-icons/fi'

export default  function Profile () {
	return (
		<div className="profile-container">
			<header>
				<img src={logo} alt="Logo" />
				<span>Bem vinda!</span>

				<Link className="button" to="incidents/new">Cadastrar novo caso</Link>
				<button>
					<FiPower size={18} color="#e02041" />
				</button>
			</header>

			<h1> Casos Cadastrados </h1>
			<ul>
				<li>
					<strong>Caso:</strong>
					<p>Caso Teste</p>

					<strong>Descrição:</strong>
					<p>Descrição Teste</p>

					<strong>Valor:</strong>
					<p>R$ 120,00</p>

					<button>
						<FiTrash2 size={20} color="#a8a8b3" />
					</button>
				</li>

				<li>
					<strong>Caso:</strong>
					<p>Caso Teste</p>

					<strong>Descrição:</strong>
					<p>Descrição Teste</p>

					<strong>Valor:</strong>
					<p>R$ 120,00</p>

					<button>
						<FiTrash2 size={20} color="#a8a8b3" />
					</button>
				</li>

				<li>
					<strong>Caso:</strong>
					<p>Caso Teste</p>

					<strong>Descrição:</strong>
					<p>Descrição Teste</p>

					<strong>Valor:</strong>
					<p>R$ 120,00</p>

					<button>
						<FiTrash2 size={20} color="#a8a8b3" />
					</button>
				</li>

				<li>
					<strong>Caso:</strong>
					<p>Caso Teste</p>

					<strong>Descrição:</strong>
					<p>Descrição Teste</p>

					<strong>Valor:</strong>
					<p>R$ 120,00</p>

					<button>
						<FiTrash2 size={20} color="#a8a8b3" />
					</button>
				</li>
			</ul>
		</div>
	)
}