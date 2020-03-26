import React, { useState, useEffect } from 'react'

import './style.scss'
import logo from "../../assets/logo.svg";
import { Link, useHistory} from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi'
import api from "../../services/api";

export default function NewIncident () {

	const history = useHistory();

	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ value, setValue ] = useState('');

	useEffect(
		() => {
			if ( !localStorage.getItem('ongId') ) {
				history.push('/')
			}
		}, []
	);

	function handleCadastrar(e) {
		e.preventDefault();
		const Authorization = localStorage.getItem('ongId');
		api.post('incidents', { title, description, value}, { headers: { Authorization } }).then(
			() => { history.push('/profile') }
		).catch(
			err => {
				const { error="Ocorreu um erro" } = err.data;
				alert(error)
			}
		)
	}

	return (
		<div className="new-incident-container" >
			<div className="content" >
				<section>
					<img src={logo} alt="Logo" />

					<h1>Cadastrar novo caso</h1>

					<p>Descreva o caso detalhadamente para encontrar um heroi que resolva isso.</p>

					<Link className="back-link" to="/profile">
						<FiArrowLeft size={16} color="#e02041"/> Voltar para a Home
					</Link>
				</section>
				<form onSubmit={handleCadastrar}>
					<input
						placeholder="Título do Caso"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<textarea
						placeholder="Descrição"
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<input
						type="numeric"
						placeholder="Valor em Reais"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}