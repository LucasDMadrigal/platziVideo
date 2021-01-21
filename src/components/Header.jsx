import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
const Header = () => (
	<header className="header">
		<img className="header__img" src={logo} alt="Platzi Video" />
		<div className="header__menu">
			<div className="header__menu--profile">
				<img src={userIcon} alt="user-icon" />
				<p>perfil</p>
			</div>
			<ul>
				<li>
					<a href="/">Cuenta</a>
					<a href="/">Cerrar sesion</a>
				</li>
			</ul>
		</div>
	</header>
);

export default Header;
