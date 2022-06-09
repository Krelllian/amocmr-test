import React from 'react'
import './Header.scss'
import searchImg from '../../imgs/common/search.svg'
import logoImg from '../../imgs/logo/logo.svg'
import profileImg from '../../imgs/common/profile.jpg'
import profileMobileImg from '../../imgs/common/profile_mobile.svg'

const Header = () => {
    return (
        <div className="header">
            <div className='header-container container'>
                <div className='header-container__row-1'>
                    <img className='header__logo' src={logoImg} alt='Logo'></img>
                    <div className='header__search search'>
                        <button className='search-btn'><img src={searchImg} alt='Search button'></img></button><input className='search-input' type="text" placeholder='Найти...' />
                    </div>
                    <div className='header__profile profile'> <p>Константин</p> <img className='profile__img' src={profileImg} alt='Profile' /></div>
                    <div className='header__profile--mobile'><img src={profileMobileImg} alt='Profile icon'></img></div>
                </div>
                <div className='header-container__row-2'>
                    <div className='header__search search--mobile'>
                        <button className='search-btn'><img src={searchImg} alt='Search button'></img></button><input className='search-input' type="text" placeholder='Найти...' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header