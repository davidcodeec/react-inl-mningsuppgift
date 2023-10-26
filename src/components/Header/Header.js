import React from 'react';
import Logo from './HeaderMenu/Logo';
import Menu from './HeaderMenu/Menu';
import SocialMedia from './HeaderMenu/SocialMedia';
import MainMenu from './HeaderMenu/MainMenu';
import Button from '../../components/Generics/Button';
import './Header.css'; // Import the CSS file

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <Logo />
                <Menu />
                <SocialMedia />
                <MainMenu />
                <Button type="login" title="Login" url="/login.html" />
            </div>
        </header>
    );
}

export default Header;
