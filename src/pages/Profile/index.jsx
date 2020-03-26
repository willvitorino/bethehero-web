import React from "react"
import './style.scss'
import api from "../../services/api";

import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from 'react-icons/fi'

export default class Profile extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			ongName: localStorage.getItem('ongName'),
			ongId: localStorage.getItem('ongId'),
			incidents: []
		}
	};

	componentDidMount() {
		const Authorization = localStorage.getItem('ongId');

		if ( !Authorization ) {
			this.props.history.replace('/')
		} else {
			api.get('profile', {
				headers: {
					Authorization
				}
			}).then(
				res => {
					const { ongName, ongId } = this.state;
					this.setState({
						ongName, ongId,
						incidents: res.data
					})
				}
			)
		}
	}

	handleLogout = () => {
		[ 'ongName', 'ongId' ].forEach( item => { localStorage.removeItem(item) } );
		this.props.history.replace('/')
	};

	handleDeleteIncident = (id) => {
		api.delete(`incidents/${id}`, {
			headers: {
				Authorization: localStorage.getItem('ongId')
			}
		}).then(
			() => {
				const { ongName, ongId, incidents } = this.state;
				this.setState({
					ongName,
					ongId,
					incidents: incidents.filter( incident => incident.id !== id )
				});
			}
		).catch(
			err => {
				alert(err.data.error)
			}
		)
	};

	render() {
		const { ongName, incidents } = this.state;
		return (
			<div className="profile-container">
				<header>
					<img src={logo} alt="Logo" />
					<span>Olá {ongName}.</span>

					<Link className="button" to="incidents/new">Cadastrar novo caso</Link>
					<button onClick={this.handleLogout} >
						<FiPower size={18} color="#e02041" />
					</button>
				</header>

				<h1> Casos Cadastrados </h1>
				<ul>
					{ incidents.map(
						incident => (
							<li key={incident.id} >
								<strong>Caso:</strong>
								<p>{ incident.title }</p>

								<strong>Descrição:</strong>
								<p>{ incident.description }</p>

								<strong>Valor:</strong>
								<p>{ Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.value) }</p>

								<button
									onClick={ () => this.handleDeleteIncident(incident.id) }
								>
									<FiTrash2 size={20} color="#a8a8b3" />
								</button>
							</li>
						)
					) }
				</ul>
			</div>
		)
	}
}